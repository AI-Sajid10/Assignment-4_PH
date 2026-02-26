1.getElementById, getElementsByClassName, and querySelector / querySelectorAll এর পার্থক্য:
getElementById("ID") একটি element দেয়, ID দিয়ে।
getElementsByClassName("Class") সব element দেয়, class দিয়ে, HTML collection হিসেবে।
querySelector: প্রথম matching element দেয়।
querySelectorAll: সব matching element দেয়, NodeList হিসেবে।

2.How do you create and insert a new element into the DOM?
let div = document.createElement('div');
div.innerText = "Hello"; 
document.body.appendChild(div);

3. What is Event Bubbling? And how does it work?
Event parent-এর দিকে উপর থেকে নিচে না, নিচ থেকে উপরে চলে।
মানে, child element-এ click করলে parent element-এর event ও trigger হতে পারে।

4.What is Event Delegation in JavaScript? Why is it useful?
Parent element-এর একবার listener দিয়ে child elements-এর events handle করা। অনেক child element-এর জন্য আলাদা listener লাগে না, memory বাঁচে।

5.What is the difference between preventDefault() and stopPropagation() methods?
preventDefault(): ব্রাউজারের default কাজ বন্ধ করে।
stopPropagation(): event bubbling বন্ধ করে।
