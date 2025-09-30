// ----------  ‰ŸÌ„«  Supabase ----------
const SUPABASE_URL = "https://xxxxxx.supabase.co"; // ·Ì‰ò Å—ÊéÂ ŒÊœ
const SUPABASE_KEY = "eyJhbGciOi..."; // Anon Key
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ---------- »«—ê–«—Ì «Œ»«— ----------
async function loadNews() {
  const { data, error } = await supabase
    .from('news')      // ‰«„ ÃœÊ· «Œ»«— œ— Supabase
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Œÿ« œ— »«—ê–«—Ì «Œ»«—:", error);
    return;
  }

  const newsList = document.getElementById('news-list');
  newsList.innerHTML = '';

  data.forEach(item => {
    const newsItem = document.createElement('div');
    newsItem.classList.add('news-item');
    newsItem.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.summary}</p>
      <small>${new Date(item.created_at).toLocaleDateString()}</small>
    `;
    newsList.appendChild(newsItem);
  });
}

// ---------- «—”«· ›—„  „«” ----------
document.getElementById('contact-form').addEventListener('submit', async function(e){
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const { data, error } = await supabase
    .from('contacts')
    .insert([{ name, email, message }]);

  if (error) {
    alert("Œÿ« œ— «—”«· ÅÌ«„: " + error.message);
  } else {
    alert("ÅÌ«„ ‘„« »« „Ê›ﬁÌ  «—”«· ‘œ!");
    this.reset();
  }
});

// ---------- »——”Ì «œ„Ì‰ ----------
function checkAdmin() {
  const adminUser = "admin@example.com"; // «Ì„Ì· «œ„Ì‰
  const userEmail = prompt("·ÿ›« «Ì„Ì· ŒÊœ —« Ê«—œ ò‰Ìœ:");

  if (userEmail === adminUser) {
    document.getElementById('admin-panel').style.display = 'block';
  } else {
    document.getElementById('admin-panel').style.display = 'none';
  }
}

// ---------- «Ã—«Ì «Ê·ÌÂ ----------
document.addEventListener('DOMContentLoaded', function() {
  loadNews();
  checkAdmin();
});
