// tools-module.js - ماژول اصلی تولید کارت‌ها
class ToolsModule {
    constructor(containerId, data) {
        this.container = document.getElementById(containerId);
        this.data = data;
        this.filteredData = [...data];
        
        if (!this.container) {
            console.error(`Container #${containerId} not found!`);
            return;
        }
        
        this.init();
    }
    
    init() {
        this.renderTools();
        this.setupSearch();
    }
    
    renderTools() {
        if (!this.container) return;
        
        this.container.innerHTML = '';
        
        this.filteredData.forEach(tool => {
            const card = this.createToolCard(tool);
            this.container.appendChild(card);
        });
        
        console.log(`🔄 ${this.filteredData.length} کارت نمایش داده شد`);
    }
    
    createToolCard(tool) {
        const card = document.createElement('div');
        card.className = 'tool-card';
        card.setAttribute('data-category', tool.category);
        card.setAttribute('data-id', tool.id);
        
        // ساختار ساده کارت
        card.innerHTML = `
            ${tool.badge ? `<div class="tool-badge">${tool.badge}</div>` : ''}
            
            <div class="tool-header">
                <div class="tool-icon">${tool.icon}</div>
                <div class="tool-info">
                    <h3>${tool.name}</h3>
                    <div class="tool-rating">
                        ${this.generateStars(tool.rating)}
                        <span class="rating-text">(${tool.rating}/۵)</span>
                    </div>
                </div>
            </div>
            
            <p class="tool-description">${tool.description}</p>
            
            <div class="tool-specs">
                <div class="spec">
                    <span class="spec-label">ورژن:</span>
                    <span class="spec-value">${tool.version}</span>
                </div>
                <div class="spec">
                    <span class="spec-label">حجم:</span>
                    <span class="spec-value">${tool.size}</span>
                </div>
            </div>
            
            <div class="download-options">
                <a href="${tool.downloadUrl}" class="download-btn primary" download>
                    <span class="download-icon">⬇️</span>
                    دانلود مستقیم
                </a>
                ${tool.officialUrl ? `
                <a href="${tool.officialUrl}" class="download-btn secondary" target="_blank">
                    <span class="download-icon">🌐</span>
                    سایت رسمی
                </a>
                ` : ''}
            </div>
        `;
        
        return card;
    }
    
    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 >= 0.5;
        const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
        
        return '★'.repeat(fullStars) + 
               (halfStar ? '½' : '') + 
               '☆'.repeat(emptyStars);
    }
    
    setupSearch() {
        const searchInput = document.getElementById('toolSearch');
        const filterButtons = document.querySelectorAll('.filter-btn');
        
        // جستجو
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                this.filterTools(e.target.value, this.getActiveFilter());
            });
        }
        
        // فیلتر دسته‌بندی
        if (filterButtons.length > 0) {
            filterButtons.forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const filter = e.target.getAttribute('data-filter');
                    this.setActiveFilter(e.target);
                    this.filterTools(this.getSearchTerm(), filter);
                });
            });
        }
    }
    
    filterTools(searchTerm = '', category = 'all') {
        this.filteredData = this.data.filter(tool => {
            const matchesCategory = category === 'all' || tool.category === category;
            const matchesSearch = !searchTerm || 
                tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                tool.description.toLowerCase().includes(searchTerm.toLowerCase());
            
            return matchesCategory && matchesSearch;
        });
        
        this.renderTools();
        this.updateResultsCount();
    }
    
    setActiveFilter(activeButton) {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        activeButton.classList.add('active');
    }
    
    getActiveFilter() {
        const activeBtn = document.querySelector('.filter-btn.active');
        return activeBtn ? activeBtn.getAttribute('data-filter') : 'all';
    }
    
    getSearchTerm() {
        const searchInput = document.getElementById('toolSearch');
        return searchInput ? searchInput.value : '';
    }
    
    updateResultsCount() {
        // اختیاری - نمایش تعداد نتایج
        console.log(`نتایج: ${this.filteredData.length} از ${this.data.length}`);
    }
    
    // متدهای عمومی برای استفاده خارجی
    addTool(toolData) {
        this.data.push({...toolData, id: Date.now()});
        this.filterTools(this.getSearchTerm(), this.getActiveFilter());
    }
    
    removeTool(toolId) {
        this.data = this.data.filter(tool => tool.id !== toolId);
        this.filterTools(this.getSearchTerm(), this.getActiveFilter());
    }
    
    getToolsByCategory(category) {
        return this.data.filter(tool => tool.category === category);
    }
}

// export برای استفاده در ماژول‌های دیگر
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ToolsModule, toolsData, categories };
}