function generate(){
    var qoutes = {
        "― Jules Renard" : '"The truly free man is the one who can turn down an invitation to dinner without giving an excuse."',
        "― Albert Einstein" : '"Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it\'s beauty."',
        "― Madeline Miller" : '"Bury us, and mark our names above. Let us be free."',
        "― Aaron Lauritsen" : '"The struggles we endure today will be the ‘good old days’ we laugh about tomorrow."',
        "― Mahatma Gandhi" : '"Be the change that you wish to see in the world."',
        "― Albert Camus": '"Man is the only creature who refuses to be what he is."',
        "― May Sarton": '"We have to dare to be ourselves, however frightening or strange that self may prove to be."',
        "― Stephen Hawking" : '"One, remember to look up at the stars and not down at your feet. Two, never give up work. Work gives you meaning and purpose and life is empty without it. Three, if you are lucky enough to find love, remember it is there and don\'t throw it away."'
    }
   
var authors = Object.keys(qoutes)

var author = authors[Math.floor(Math.random() * authors.length)]

var quote = qoutes[author];

document.getElementById("qoute").textContent = quote
document.getElementById("author").textContent = author
}
