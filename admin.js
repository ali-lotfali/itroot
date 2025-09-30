// بررسی ورود ادمین
const isAdmin = localStorage.getItem("isAdmin") === "true";
const adminPanel = document.getElementById("admin-panel");
if(isAdmin && adminPanel){
  adminPanel.style.display="block";
}

// نمونه مدیریت اخبار (همان اسکریپت قبل)
let news = [
  {title:"۵ نکته برای افزایش امنیت شبکه", summary:"روش‌های ساده و عملی برای شرکت‌های کوچک", date:"2025-09-25"},
  {title:"ابزارهای رایگان برای همکاری تیمی", summary:"معرفی ابزارهایی برای بهبود همکاری و مدیریت پروژه", date:"2025-08-10"}
];

const newsList = document.getElementById("news-list");
const adminNewsList = document.getElementById("admin-news-list");
const addNewsForm = document.getElementById("add-news-form");

function renderNews(){
  if(newsList) newsList.innerHTML = "";
  if(adminNewsList) adminNewsList.innerHTML = "";
  news.forEach((n,i)=>{
    if(newsList) newsList.innerHTML += `<div class="news-item"><h3>${n.title}</h3><p>${n.summary}</p><small>${n.date}</small></div>`;
    if(isAdmin && adminNewsList) adminNewsList.innerHTML += `<div>${n.title} <button onclick="deleteNews(${i})">حذف</button></div>`;
  });
}

function deleteNews(index){
  news.splice(index,1);
  renderNews();
}

if(addNewsForm){
  addNewsForm.addEventListener("submit",function(e){
    e.preventDefault();
    const title = document.getElementById("news-title").value;
    const summary = document.getElementById("news-summary").value;
    const date = new Date().toISOString().split('T')[0];
    news.push({title,summary,date});
    addNewsForm.reset();
    renderNews();
  });
}

renderNews();
