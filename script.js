
        let shortc = localStorage.getItem("shortcuts");
        if (shortc !== null) {
            document.getElementById("shortcuts123").innerHTML = shortc;
        }
            

            
            function search() {
              let q;
                let beforeurl = localStorage.getItem("sengineURL");
                if (beforeurl == null) {
            beforeurl = "https://search.brave.com/search?q="
        }
              q = document.getElementById("text").value;
                if (q.includes("shortcut::")) {
                   document.getElementById('shrt').style.display = "block";
                    document.getElementById('imp').style.display = "block";
                document.getElementById('br').style.display = "block";
                } else {
              window.open(beforeurl + encodeURIComponent(q));
                }
          }

            function importSC() {
                let html;
                html = document.getElementById('shrt').value;
                document.getElementById("shortcuts123").innerHTML = html;
                localStorage.setItem("shortcuts", html);
                document.getElementById('shrt').style.display = "none";
                document.getElementById('imp').style.display = "none";
                document.getElementById('br').style.display = "none";
                
                
            }
