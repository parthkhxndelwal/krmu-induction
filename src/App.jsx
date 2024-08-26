import React, { useState, useEffect, useCallback } from 'react';

const data = {
  "Data": [
    {
      "name": "Devasya Dahiya",
      "studentID": "KRMU2425244",
      "programme": "B.Sc. (Hons.) Computer Science with academic support of IBM",
      "room": "A112"
    },
    {
      "name": "Sabir",
      "studentID": "KRMU2421445",
      "programme": "B.Sc. (Hons.) Computer Science with academic support of IBM",
      "room": "A112"
    },
    {
      "name": "Sidharth Krishna S",
      "studentID": "KRMU2421336",
      "programme": "B.Sc. (Hons.) Computer Science with academic support of IBM",
      "room": "A112"
    },
    {
      "name": "Sahil Mayuresh Mishra",
      "studentID": "KRMU2427350",
      "programme": "B.Sc. (Hons.) Computer Science with academic support of IBM",
      "room": "A112"
    },
    {
      "name": "Suryansh K",
      "studentID": "KRMU2425238",
      "programme": "B.Sc. (Hons.) Computer Science with academic support of IBM",
      "room": "A112"
    },
    {
      "name": "K Sai Vignesh Yadav",
      "studentID": "KRMU2427644",
      "programme": "B.Sc. (Hons.) Computer Science with academic support of IBM",
      "room": "A112"
    },
    {
      "name": "Gopi Prasad",
      "studentID": "KRMU2425954",
      "programme": "B.Sc. (Hons.) Computer Science with academic support of IBM",
      "room": "A112"
    },
    {
      "name": "Anshu Yadav",
      "studentID": "KRMU2426740",
      "programme": "B.Sc. (Hons.) Computer Science with academic support of IBM",
      "room": "A112"
    },
    {
      "name": "Aditya Kaul",
      "studentID": "KRMU2422777",
      "programme": "B.Sc. (Hons.) Computer Science with academic support of IBM",
      "room": "A112"
    },
    {
      "name": "Kanak Sharma",
      "studentID": "KRMU2425870",
      "programme": "B.Sc. (Hons.) Computer Science with academic support of IBM",
      "room": "A112"
    },
    {
      "name": "Gajal Bansal",
      "studentID": "KRMU2429523",
      "programme": "B.Sc. (Hons.) Computer Science with academic support of IBM",
      "room": "A112"
    },
    {
      "name": "Kartikey",
      "studentID": "KRMU2430804",
      "programme": "B.Sc. (Hons.) Computer Science with academic support of IBM",
      "room": "A112"
    },
    {
      "name": "Ankit Kumar Yadav",
      "studentID": "KRMU2432082",
      "programme": "B.Sc. (Hons.) Computer Science with academic support of IBM",
      "room": "A112"
    },
    {
      "name": "Rupin Sethi",
      "studentID": "KRMU2425684",
      "programme": "B.Sc. (Hons.) Computer Science with academic support of IBM",
      "room": "A112"
    },
    {
      "name": "Prachi ",
      "studentID": "KRMU2430225",
      "programme": "B.Sc. (Hons.) Computer Science with academic support of IBM",
      "room": "A112"
    },
    {
      "name": "Kartik Yadav",
      "studentID": "KRMU2431888",
      "programme": "B.Sc. (Hons.) Computer Science with academic support of IBM",
      "room": "A112"
    },
    {
      "name": "Diwakar",
      "studentID": "KRMU2432303",
      "programme": "B.Sc. (Hons.) Computer Science with academic support of IBM",
      "room": "A112"
    },
    {
      "name": "Aditya Chauhan",
      "studentID": "KRMU2422064",
      "programme": "B.Sc. (Hons.) Cyber Security",
      "room": "A112"
    },
    {
      "name": "Naman Katewa",
      "studentID": "KRMU2422864",
      "programme": "B.Sc. (Hons.) Cyber Security",
      "room": "A112"
    },
    {
      "name": "Himanshu Kaushik",
      "studentID": "KRMU2423381",
      "programme": "B.Sc. (Hons.) Cyber Security",
      "room": "A112"
    },
    {
      "name": "Kiruthika",
      "studentID": "KRMU2423112",
      "programme": "B.Sc. (Hons.) Cyber Security",
      "room": "A112"
    },
    {
      "name": "Mayank Rawat",
      "studentID": "KRMU2425205",
      "programme": "B.Sc. (Hons.) Cyber Security",
      "room": "A112"
    },
    {
      "name": "Akansh Pandey",
      "studentID": "KRMU2421094",
      "programme": "B.Sc. (Hons.) Cyber Security",
      "room": "A112"
    },
    {
      "name": "Shahbaz Sheikh",
      "studentID": "KRMU2423701",
      "programme": "B.Sc. (Hons.) Cyber Security",
      "room": "A112"
    },
    {
      "name": "Bura Anju",
      "studentID": "KRMU2427161",
      "programme": "B.Sc. (Hons.) Cyber Security",
      "room": "A112"
    },
    {
      "name": "Harshit",
      "studentID": "KRMU2432011",
      "programme": "B.Sc. (Hons.) Cyber Security",
      "room": "A112"
    },
    {
      "name": "Sarthak Kumar",
      "studentID": "KRMU2422572",
      "programme": "B.Sc. (Hons.) Data Science",
      "room": "A112"
    },
    {
      "name": "Muskan",
      "studentID": "KRMU2420950",
      "programme": "B.Sc. (Hons.) Data Science",
      "room": "A112"
    },
    {
      "name": "Sneha Yadav",
      "studentID": "KRMU2430143",
      "programme": "B.Sc. (Hons.) Data Science",
      "room": "A112"
    },
    {
      "name": "Kritika Gupta",
      "studentID": "KRMU2426971",
      "programme": "B.Sc. (Hons.) Data Science",
      "room": "A112"
    },
    {
      "name": "Vaibhav Tanwar",
      "studentID": "KRMU2428430",
      "programme": "B.Sc. (Hons.) Data Science",
      "room": "A112"
    },
    {
      "name": "Avleen Kaur",
      "studentID": "KRMU2421583",
      "programme": "B.Sc. (Hons.) Data Science",
      "room": "A112"
    },
    {
      "name": "Vishal Dagar",
      "studentID": "KRMU2429916",
      "programme": "B.Tech (lateral) Computer Science & Engineering",
      "room": "A101"
    },
    {
      "name": "Aldrin Debbarma",
      "studentID": "KRMU2430963",
      "programme": "B.Tech (lateral) Computer Science & Engineering",
      "room": "A101"
    },
    {
      "name": "Roopansh Goswami",
      "studentID": "KRMU2422442",
      "programme": "B.Tech (lateral) Computer Science & Engineering",
      "room": "A101"
    },
    {
      "name": "Aditya",
      "studentID": "KRMU2429070",
      "programme": "B.Tech (lateral) Computer Science & Engineering",
      "room": "A101"
    },
    {
      "name": "Manish Samad",
      "studentID": "KRMU2429595",
      "programme": "B.Tech (lateral) Computer Science & Engineering",
      "room": "A101"
    },
    {
      "name": "Nidhi Kumari",
      "studentID": "KRMU2432466",
      "programme": "B.Tech (lateral) Computer Science & Engineering",
      "room": "A101"
    },
    {
      "name": "Prince Kumar Gupta",
      "studentID": "KRMU2432795",
      "programme": "B.Tech (lateral) Computer Science & Engineering",
      "room": "A101"
    },
    {
      "name": "Ranvir Singh",
      "studentID": "KRMU2425920",
      "programme": "B.Tech (lateral) Computer Science & Engineering",
      "room": "A101"
    },
    {
      "name": "Rudraraj Radhwani",
      "studentID": "KRMU2428161",
      "programme": "B.Tech (lateral) CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A101"
    },
    {
      "name": "Adarsh Mishra",
      "studentID": "KRMU2432343",
      "programme": "B.Tech (lateral) CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A101"
    },
    {
      "name": "Badal Prasad",
      "studentID": "KRMU2426303",
      "programme": "B.Tech (lateral) CSE (Full Stack Development) with academic support of Xebia",
      "room": "A101"
    },
    {
      "name": "Golla Diwakar Yadav",
      "studentID": "KRMU2429262",
      "programme": "B.Tech (lateral) CSE (UX/UI) with academic support of ImaginXP",
      "room": "A101"
    },
    {
      "name": "Umang Gupta",
      "studentID": "KRMU2426749",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Aarushi Singh",
      "studentID": "KRMU2427365",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Rahul",
      "studentID": "KRMU2420237",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Krishna Gaur",
      "studentID": "KRMU2420733",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Aakash Kumar",
      "studentID": "KRMU2427060",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Shekhar",
      "studentID": "KRMU2423499",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Harmanpreet Kaur",
      "studentID": "KRMU2427055",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Aakash Kumar",
      "studentID": "KRMU2427834",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Gaurav Upadhyay",
      "studentID": "KRMU2426946",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Vanshika Dixit",
      "studentID": "KRMU2419834",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Aditya Maindola",
      "studentID": "KRMU2423296",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Lucky Kumar",
      "studentID": "KRMU2428844",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Harsh Kumar",
      "studentID": "KRMU2419808",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "I.K.Kevin Samuels",
      "studentID": "KRMU2420938",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Umesh",
      "studentID": "KRMU2425458",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Roopanshi Yadav",
      "studentID": "KRMU2426314",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Piyush Kataria",
      "studentID": "KRMU2421209",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Swastik Mishra",
      "studentID": "KRMU2420407",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Sneha Gupta",
      "studentID": "KRMU2420763",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Anshika Kashyap",
      "studentID": "KRMU2420977",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Ishan Jha",
      "studentID": "KRMU2421349",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Aditya Wadhawan",
      "studentID": "KRMU2421701",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Pranjal Yadav",
      "studentID": "KRMU2423786",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Nakul Arora",
      "studentID": "KRMU2424655",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Satvik Chauhan",
      "studentID": "KRMU2427275",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Abhinav Bansal",
      "studentID": "KRMU2427289",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Aditya Pandey",
      "studentID": "KRMU2421262",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Kushagra",
      "studentID": "KRMU2425047",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Aditya Bhatia",
      "studentID": "KRMU2420342",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Simran Singh Zaniya",
      "studentID": "KRMU2421148",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Jonny Goutam",
      "studentID": "KRMU2423576",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Taniya",
      "studentID": "KRMU2424102",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Pranav Garg",
      "studentID": "KRMU2424837",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Kushagar Sharma",
      "studentID": "KRMU2425704",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Anmol Tyagi",
      "studentID": "KRMU2427217",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Abhas Mishra",
      "studentID": "KRMU2427378",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Harshdeep Singh",
      "studentID": "KRMU2428559",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Bhavik Batra",
      "studentID": "KRMU2430114",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Aadya Diwan",
      "studentID": "KRMU2421516",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Ansh Chhikara",
      "studentID": "KRMU2421719",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Aayush",
      "studentID": "KRMU2425264",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Manan Sehgal",
      "studentID": "KRMU2420085",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Neeraj Chandra Joshi",
      "studentID": "KRMU2421671",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Abhinav Singh",
      "studentID": "KRMU2430642",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Utsav Ratan",
      "studentID": "KRMU2424475",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Amandeep Singh",
      "studentID": "KRMU2426162",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Gauri Katiyar ",
      "studentID": "KRMU2426623",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Kasak Yadav",
      "studentID": "KRMU2427632",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Love",
      "studentID": "KRMU2428915",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Pranjal Dutta",
      "studentID": "KRMU2423702",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Utkarsh Thapliyal",
      "studentID": "KRMU2424443",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Faiz Khan",
      "studentID": "KRMU2427626",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Vipul",
      "studentID": "KRMU2430576",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Diksha Kumari",
      "studentID": "KRMU2421580",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Ananya Sharma",
      "studentID": "KRMU2421948",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Aryan Tiwari",
      "studentID": "KRMU2425403",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Ritik Sharma",
      "studentID": "KRMU2426417",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Karan Choudhary",
      "studentID": "KRMU2429897",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Mukul Sharma",
      "studentID": "KRMU2421740",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Lakshay Sharma",
      "studentID": "KRMU2421741",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Shikha",
      "studentID": "KRMU2423319",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Anirudh Anthwal",
      "studentID": "KRMU2425886",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Khushi Sharma",
      "studentID": "KRMU2426297",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Krishna Vohra",
      "studentID": "KRMU2426418",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Vanshika Dubey",
      "studentID": "KRMU2427171",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Sagar Singh",
      "studentID": "KRMU2428928",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Rounak Jha",
      "studentID": "KRMU2430497",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Rajat Singh",
      "studentID": "KRMU2421821",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Abhishek Kumar",
      "studentID": "KRMU2426796",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Karan Bhatt",
      "studentID": "KRMU2424232",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Shubham Yadav",
      "studentID": "KRMU2425687",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Ravinder",
      "studentID": "KRMU2426603",
      "programme": "B.Tech CSE",
      "room": "A101"
    },
    {
      "name": "Adarsh",
      "studentID": "KRMU2423506",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Abhay Vishwakarma",
      "studentID": "KRMU2427441",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Divesh",
      "studentID": "KRMU2428100",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Harshit Nagaich",
      "studentID": "KRMU2428410",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Utsav",
      "studentID": "KRMU2428832",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Anjali Tomar",
      "studentID": "KRMU2430406",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Saieena Negi",
      "studentID": "KRMU2421268",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Dev",
      "studentID": "KRMU2421358",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Divyansh Joshi",
      "studentID": "KRMU2422924",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Nikhil Sharma",
      "studentID": "KRMU2422933",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Anshuman Malik",
      "studentID": "KRMU2423165",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Anushka Kashyap",
      "studentID": "KRMU2423739",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Aditya Narayan",
      "studentID": "KRMU2425204",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Aditya",
      "studentID": "KRMU2426755",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Nishant Yadav",
      "studentID": "KRMU2425957",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Vivek Santosh Mandal",
      "studentID": "KRMU2425982",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Sahdev Sharma",
      "studentID": "KRMU2426894",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Pallavi Roy",
      "studentID": "KRMU2427609",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Anuran Saha",
      "studentID": "KRMU2427828",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Aditya Kumar",
      "studentID": "KRMU2431925",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Bharat Chandwani",
      "studentID": "KRMU2428972",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Prince Yadav",
      "studentID": "KRMU2429836",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Aditya Kumar",
      "studentID": "KRMU2425864",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Mayank Raj",
      "studentID": "KRMU2430688",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Srishti Setia",
      "studentID": "KRMU2423384",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Vansh Tanwar",
      "studentID": "KRMU2423971",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Madhu Sharma",
      "studentID": "KRMU2425036",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Rahul Kumar",
      "studentID": "KRMU2426507",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Navya Singh",
      "studentID": "KRMU2427326",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Daksh Thakran",
      "studentID": "KRMU2428813",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Komal Lohia",
      "studentID": "KRMU2429993",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Saumya",
      "studentID": "KRMU2430173",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Anshika",
      "studentID": "KRMU2430479",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Harshit Singh",
      "studentID": "KRMU2430554",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Bhavisya",
      "studentID": "KRMU2430693",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Naman Yadav",
      "studentID": "KRMU2421273",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Krishika Sinha",
      "studentID": "KRMU2421585",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Raghav Arora",
      "studentID": "KRMU2421911",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Priyanka Priyanka",
      "studentID": "KRMU2423596",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Lakshita Kalra",
      "studentID": "KRMU2424372",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Arbaj Khan",
      "studentID": "KRMU2424911",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Aditya Pal",
      "studentID": "KRMU2427302",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Tanmay Dixit",
      "studentID": "KRMU2427730",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Hargun",
      "studentID": "KRMU2430107",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Jai Kaushik",
      "studentID": "KRMU2426071",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Mahin",
      "studentID": "KRMU2426415",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Aditya Kumar Singh",
      "studentID": "KRMU2428778",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Kratika",
      "studentID": "KRMU2428286",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Om Singh Rawat",
      "studentID": "KRMU2429403",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Aryan Singh",
      "studentID": "KRMU2432102",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Yukti",
      "studentID": "KRMU2423295",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Pranav Tripathi",
      "studentID": "KRMU2424233",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Harsh Bardhan",
      "studentID": "KRMU2424544",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Ajay",
      "studentID": "KRMU2431830",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Ayush Bangari",
      "studentID": "KRMU2425791",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Aman",
      "studentID": "KRMU2432461",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Aman Singh",
      "studentID": "KRMU2427046",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Pooja",
      "studentID": "KRMU2429017",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Devender",
      "studentID": "KRMU2429491",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Yash",
      "studentID": "KRMU2429828",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Anshu Hooda",
      "studentID": "KRMU2430188",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Anshuman Khandka",
      "studentID": "KRMU2431398",
      "programme": "B.Tech CSE",
      "room": "A102"
    },
    {
      "name": "Aman Verma",
      "studentID": "KRMU2431441",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Sujal Kumar Singh",
      "studentID": "KRMU2424697",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Ankit",
      "studentID": "KRMU2428683",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Vaibhav Goyal",
      "studentID": "KRMU2425066",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Vansh Kalra",
      "studentID": "KRMU2425477",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Rohan Rathee",
      "studentID": "KRMU2425775",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Varsha",
      "studentID": "KRMU2426175",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Mitra Vidhi Rajesh",
      "studentID": "KRMU2426683",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Aryan",
      "studentID": "KRMU2420431",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Akhil Singh",
      "studentID": "KRMU2428113",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Harsh Roy",
      "studentID": "KRMU2429179",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Sumant Sarkar",
      "studentID": "KRMU2431047",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Garv",
      "studentID": "KRMU2431077",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Ananya",
      "studentID": "KRMU2431604",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Pawan Bisht",
      "studentID": "KRMU2431661",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Aryan",
      "studentID": "KRMU2427132",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Prince Rana",
      "studentID": "KRMU2432749",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Ibaadur Rehman",
      "studentID": "KRMU2420360",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Ahaan Arora",
      "studentID": "KRMU2420417",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Prakhar Midha",
      "studentID": "KRMU2420668",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Ankit Kumar",
      "studentID": "KRMU2420694",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Harshit Rao",
      "studentID": "KRMU2421036",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Aryan",
      "studentID": "KRMU2432493",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Prateek",
      "studentID": "KRMU2421205",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Yanis Hasan Khan",
      "studentID": "KRMU2421520",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Sanchali Yadav",
      "studentID": "KRMU2421594",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Tanishq Chauhan",
      "studentID": "KRMU2421683",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Ishaan Kumar",
      "studentID": "KRMU2422267",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Krish Gupta",
      "studentID": "KRMU2422319",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Palaktiwari",
      "studentID": "KRMU2422584",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Julfikar",
      "studentID": "KRMU2422602",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Rahul Singh",
      "studentID": "KRMU2422986",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Sawan Kataria",
      "studentID": "KRMU2423057",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Naman",
      "studentID": "KRMU2423075",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Bhumika Jangir",
      "studentID": "KRMU2423077",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Sahil Jha",
      "studentID": "KRMU2423088",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Hemal Nangru",
      "studentID": "KRMU2423237",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Sagar Tailor",
      "studentID": "KRMU2423265",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Ishaan",
      "studentID": "KRMU2423411",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Saransh Tiwari",
      "studentID": "KRMU2423467",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Devansh Jain",
      "studentID": "KRMU2423556",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Ritik Kumar",
      "studentID": "KRMU2423653",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Priyanka Nagpal",
      "studentID": "KRMU2423832",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Harsh Sahani",
      "studentID": "KRMU2424166",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Arnav Choudhary",
      "studentID": "KRMU2424170",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Hridyanshu Singh",
      "studentID": "KRMU2424226",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Jasmine Kapoor",
      "studentID": "KRMU2424256",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Sakshi Garg",
      "studentID": "KRMU2424552",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Shivam Raghuvanshi",
      "studentID": "KRMU2425220",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Devesh",
      "studentID": "KRMU2425515",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Manjeet Yadav",
      "studentID": "KRMU2425841",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Manvendra Sharma",
      "studentID": "KRMU2425947",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Prince Raj",
      "studentID": "KRMU2426237",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Rajeev Pandey",
      "studentID": "KRMU2426280",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Simarjeet Kaur",
      "studentID": "KRMU2426539",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Dhruv Gangotia",
      "studentID": "KRMU2426869",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Ayush Kumar",
      "studentID": "KRMU2420621",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Anuj Aggarwal",
      "studentID": "KRMU2427184",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Prerak Jain",
      "studentID": "KRMU2427325",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Utsah Singhal",
      "studentID": "KRMU2427386",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Dipesh Raghav",
      "studentID": "KRMU2427467",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Shammi Kumar",
      "studentID": "KRMU2427533",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Khushal Aditya",
      "studentID": "KRMU2427741",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Mahi Agarwal",
      "studentID": "KRMU2428021",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Aaditya Shandilya",
      "studentID": "KRMU2428195",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Akansha",
      "studentID": "KRMU2428263",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Pankaj Kumar",
      "studentID": "KRMU2428337",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Arnav Ganda",
      "studentID": "KRMU2428365",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Aditya Ranjan",
      "studentID": "KRMU2428380",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Panav Ailawadi",
      "studentID": "KRMU2428757",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Honil Dungerwal",
      "studentID": "KRMU2428823",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Agam Kumar",
      "studentID": "KRMU2428944",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Hemant Chauhan",
      "studentID": "KRMU2429143",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Mr Chiranjeevi Sahoo",
      "studentID": "KRMU2429343",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Taher Raj",
      "studentID": "KRMU2429675",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Sneha Goyal",
      "studentID": "KRMU2429695",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Kailash Chand Yadav",
      "studentID": "KRMU2429779",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Yashieta Sethi",
      "studentID": "KRMU2429847",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Muskan Bhagat",
      "studentID": "KRMU2429851",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Deepak",
      "studentID": "KRMU2423087",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Hitarth Khandal",
      "studentID": "KRMU2430018",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Dheeraj Kumar",
      "studentID": "KRMU2430036",
      "programme": "B.Tech CSE",
      "room": "A108"
    },
    {
      "name": "Sanchita Nazir",
      "studentID": "KRMU2430090",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Mahkar Khatana",
      "studentID": "KRMU2430315",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Vanshika Gupta",
      "studentID": "KRMU2430359",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Saket Kumar",
      "studentID": "KRMU2430376",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Mohd Faiz",
      "studentID": "KRMU2430520",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Albey J Saju",
      "studentID": "KRMU2430577",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Deepak",
      "studentID": "KRMU2431464",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Deepanshu",
      "studentID": "KRMU2425910",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Vishal Gupta",
      "studentID": "KRMU2430686",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Yash Vikal",
      "studentID": "KRMU2430707",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Ishika Banga",
      "studentID": "KRMU2430721",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Madhav Kumar Singh",
      "studentID": "KRMU2430767",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Selinaa Tiwari",
      "studentID": "KRMU2430905",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Dhruv",
      "studentID": "KRMU2424572",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Yuvraj Singh Rathore",
      "studentID": "KRMU2430919",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Smriti Arya",
      "studentID": "KRMU2431088",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Divyansh",
      "studentID": "KRMU2423887",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Piyush Mishra",
      "studentID": "KRMU2431268",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Gracy",
      "studentID": "KRMU2431322",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Mahima",
      "studentID": "KRMU2431344",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Sahil Kumar",
      "studentID": "KRMU2431390",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Ronak Agarwal",
      "studentID": "KRMU2431420",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Prince Kumar",
      "studentID": "KRMU2431487",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Nayan Kumar",
      "studentID": "KRMU2431642",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Garvit Sharma",
      "studentID": "KRMU2431655",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Akash Yadav",
      "studentID": "KRMU2431681",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Dolly",
      "studentID": "KRMU2429260",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Ansh Raj",
      "studentID": "KRMU2432112",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Priyanshu Kumar Singh",
      "studentID": "KRMU2432162",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Anubhav Rodhiya",
      "studentID": "KRMU2432298",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Gummudu Leeladhar",
      "studentID": "KRMU2432356",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Alwyn Charles",
      "studentID": "KRMU2432358",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Gaurav",
      "studentID": "KRMU2430163",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Sujal Singh",
      "studentID": "KRMU2432494",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Lokesh",
      "studentID": "KRMU2432523",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Gaurav Sharma",
      "studentID": "KRMU2428685",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Kumar Subodh",
      "studentID": "KRMU2432864",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Prachi Yadav",
      "studentID": "KRMU2432908",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Gaurav Yadav",
      "studentID": "KRMU2426859",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Saurav Kumar Pandey",
      "studentID": "KRMU2429196",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Saksham Meena",
      "studentID": "KRMU2431571",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Abdur Rahman",
      "studentID": "KRMU2431722",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Aryan Nayak",
      "studentID": "KRMU2432729",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Ram Awatar Chaudhari",
      "studentID": "KRMU2419859",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Sania Singh",
      "studentID": "KRMU2420176",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Mahit Singh Saini",
      "studentID": "KRMU2420290",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Ishu",
      "studentID": "KRMU2420469",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Hardik",
      "studentID": "KRMU2431509",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Gaurishankar",
      "studentID": "KRMU2420686",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Anurag Upadhyay",
      "studentID": "KRMU2422469",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Rashmi Jha",
      "studentID": "KRMU2423163",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Daksh Gupta",
      "studentID": "KRMU2423174",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Bhuwan Chugh",
      "studentID": "KRMU2423182",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Akshita Kumari Singh",
      "studentID": "KRMU2423438",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Srishty Singh",
      "studentID": "KRMU2424023",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Daksh Yadav",
      "studentID": "KRMU2424622",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Namay Nagpal",
      "studentID": "KRMU2424826",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Yash Kumar",
      "studentID": "KRMU2424851",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Nandini",
      "studentID": "KRMU2424929",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Saumay Vanjani",
      "studentID": "KRMU2425075",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Mrigank Singh",
      "studentID": "KRMU2425334",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Himanshu Kumar",
      "studentID": "KRMU2425697",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Akash",
      "studentID": "KRMU2425750",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Maanvi Tiwary",
      "studentID": "KRMU2425819",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Diya Goel",
      "studentID": "KRMU2426088",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Mirnal Kumar Singh",
      "studentID": "KRMU2426823",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Keshav",
      "studentID": "KRMU2426835",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Shweta",
      "studentID": "KRMU2427018",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Nikhil Sachdeva",
      "studentID": "KRMU2427150",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Lakshay Gulia",
      "studentID": "KRMU2427319",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Divyanshu Deep",
      "studentID": "KRMU2427516",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Himanshu Arya",
      "studentID": "KRMU2427743",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Harsh",
      "studentID": "KRMU2428362",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Monishka Bajaj",
      "studentID": "KRMU2428533",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Himanshu",
      "studentID": "KRMU2421388",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Jatin",
      "studentID": "KRMU2424824",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Sriyansh Yadav",
      "studentID": "KRMU2428779",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Pushp Jangra",
      "studentID": "KRMU2428840",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Pooja Aggarwal",
      "studentID": "KRMU2430355",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Chirag Yadav",
      "studentID": "KRMU2430422",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Khushi",
      "studentID": "KRMU2425385",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Uday Yadav",
      "studentID": "KRMU2430795",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Simran",
      "studentID": "KRMU2430914",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Rudransh Gupta",
      "studentID": "KRMU2431146",
      "programme": "B.Tech CSE",
      "room": "A109"
    },
    {
      "name": "Nikki Chauhan",
      "studentID": "KRMU2431367",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Mohini Chauhan",
      "studentID": "KRMU2431378",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Shikha Rawat",
      "studentID": "KRMU2431382",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Tushar Nandal",
      "studentID": "KRMU2431383",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Sanchit Yadav",
      "studentID": "KRMU2431477",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Alisa Kumari Patro",
      "studentID": "KRMU2431587",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Vishal Takkar",
      "studentID": "KRMU2431594",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Khushi",
      "studentID": "KRMU2423033",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Aryan Mishra",
      "studentID": "KRMU2431840",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Prince",
      "studentID": "KRMU2432095",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Sayan",
      "studentID": "KRMU2432177",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Vicky Jha",
      "studentID": "KRMU2432453",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Aaditya Malik",
      "studentID": "KRMU2432555",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Anubhav Vaish",
      "studentID": "KRMU2432594",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Suhani",
      "studentID": "KRMU2432656",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Prem Kumar",
      "studentID": "KRMU2432855",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Khushi",
      "studentID": "KRMU2421138",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Khushi",
      "studentID": "KRMU2432806",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Krish",
      "studentID": "KRMU2423329",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Muskan",
      "studentID": "KRMU2422313",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Nishant",
      "studentID": "KRMU2430480",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Nitin Kumar",
      "studentID": "KRMU2431954",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Payal",
      "studentID": "KRMU2430469",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Preet Singh",
      "studentID": "KRMU2430910",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Radhika",
      "studentID": "KRMU2427719",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Rahul Yadav",
      "studentID": "KRMU2431148",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Rohit Kumar",
      "studentID": "KRMU2431734",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Sameer",
      "studentID": "KRMU2431281",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Shubham",
      "studentID": "KRMU2427826",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Tarun",
      "studentID": "KRMU2427745",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Tushar",
      "studentID": "KRMU2430632",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Utkarsh Singh",
      "studentID": "KRMU2430223",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Vansh",
      "studentID": "KRMU2422816",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Vivek",
      "studentID": "KRMU2429934",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Yash Raj",
      "studentID": "KRMU2425474",
      "programme": "B.Tech CSE",
      "room": "A115"
    },
    {
      "name": "Dhruv Singh Raghu",
      "studentID": "KRMU2420723",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Kunal Krishna",
      "studentID": "KRMU2421320",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Khyati Sharma",
      "studentID": "KRMU2420405",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Anshuman Rawat",
      "studentID": "KRMU2425333",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Kunal Lohia",
      "studentID": "KRMU2428143",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Shashank Panwar",
      "studentID": "KRMU2428387",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Shreyansh Negi",
      "studentID": "KRMU2423987",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Nayan Goswami",
      "studentID": "KRMU2421656",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Pardeep Kumar",
      "studentID": "KRMU2427510",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Akshansh Pundir",
      "studentID": "KRMU2420117",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Mohit Sharma",
      "studentID": "KRMU2423181",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Bhavya Agarwal",
      "studentID": "KRMU2425284",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Ashish Kaushik",
      "studentID": "KRMU2426160",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Ayush Sinha",
      "studentID": "KRMU2420601",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Ayush Pratap Singh",
      "studentID": "KRMU2423316",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Sahil Shrivastava",
      "studentID": "KRMU2423627",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Yuvraj",
      "studentID": "KRMU2424577",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Ishu Tanwar",
      "studentID": "KRMU2429738",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Aryash",
      "studentID": "KRMU2424931",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Abhay Goyat",
      "studentID": "KRMU2420333",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Ojasvi Singh",
      "studentID": "KRMU2422006",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Yashpal",
      "studentID": "KRMU2422847",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Hemanshi",
      "studentID": "KRMU2429518",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Vanshika Krishan",
      "studentID": "KRMU2422017",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Daksh Dhillon",
      "studentID": "KRMU2425266",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Shreeya Ghai",
      "studentID": "KRMU2419884",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Swastik Sharma",
      "studentID": "KRMU2419891",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Vansh Sharms",
      "studentID": "KRMU2420744",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Diwanshu Yadav",
      "studentID": "KRMU2423282",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Akanksha Anand",
      "studentID": "KRMU2426483",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Mohd Rihan",
      "studentID": "KRMU2428933",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Narayan",
      "studentID": "KRMU2420275",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Ishika Tanwar",
      "studentID": "KRMU2420317",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Sebastian",
      "studentID": "KRMU2420965",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Aditya Hans",
      "studentID": "KRMU2421296",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Ritwik Sood",
      "studentID": "KRMU2421535",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Nikhil Dhandhi",
      "studentID": "KRMU2422171",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Abhivrat Pathak",
      "studentID": "KRMU2422519",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Sarah Henry",
      "studentID": "KRMU2424497",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Ashish Sharma",
      "studentID": "KRMU2425144",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Mukul",
      "studentID": "KRMU2425234",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Rudra Pratap Singh Rathore",
      "studentID": "KRMU2420722",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Sundram Kumar",
      "studentID": "KRMU2421248",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Manshi Jha",
      "studentID": "KRMU2423066",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Hritesh Sharma",
      "studentID": "KRMU2426620",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Prince Singh",
      "studentID": "KRMU2429036",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Anirudh Bhatia",
      "studentID": "KRMU2420109",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Avneet Tanwar",
      "studentID": "KRMU2421578",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Aksh Thakran",
      "studentID": "KRMU2428780",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Manish",
      "studentID": "KRMU2431052",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Aryan Agrawal",
      "studentID": "KRMU2424074",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Anirudh Chauhan",
      "studentID": "KRMU2427551",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Mohit Yadav",
      "studentID": "KRMU2428706",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Ashutosh Soni",
      "studentID": "KRMU2420126",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Rishabh Jha",
      "studentID": "KRMU2422148",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Abhinav Sharma",
      "studentID": "KRMU2422500",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Arin",
      "studentID": "KRMU2423996",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Sarim Siddiqui",
      "studentID": "KRMU2424488",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Jagriti Kumari",
      "studentID": "KRMU2425368",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Ayush Roy",
      "studentID": "KRMU2425588",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Bapender Rathi",
      "studentID": "KRMU2426463",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Yashasvi Bhagour",
      "studentID": "KRMU2427668",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Rishu Kumar",
      "studentID": "KRMU2428256",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Utkarsh",
      "studentID": "KRMU2420194",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Aarav Sharma",
      "studentID": "KRMU2423982",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Deepak Mishra",
      "studentID": "KRMU2425028",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Sagun Raj",
      "studentID": "KRMU2428008",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Khusboo",
      "studentID": "KRMU2420145",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Smruthi Jha",
      "studentID": "KRMU2420370",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Kshitiz",
      "studentID": "KRMU2422719",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Dhruv Chuadhary",
      "studentID": "KRMU2423637",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Aniruddh Prakash Kaushalyayan",
      "studentID": "KRMU2424017",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Rishika Pasricha",
      "studentID": "KRMU2424472",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Himanshu Singh",
      "studentID": "KRMU2424522",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Garvit",
      "studentID": "KRMU2424729",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Risabh",
      "studentID": "KRMU2424961",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Vishu Sangwan",
      "studentID": "KRMU2425133",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Swayam Goswami",
      "studentID": "KRMU2425271",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Rishabh Kumar",
      "studentID": "KRMU2426167",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Saham Mansoori",
      "studentID": "KRMU2426532",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Prakhar",
      "studentID": "KRMU2426582",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Sandeep Yadav",
      "studentID": "KRMU2426708",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Mainpal",
      "studentID": "KRMU2426921",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Poras",
      "studentID": "KRMU2427699",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Priyanshu Singh",
      "studentID": "KRMU2428104",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Nidhi",
      "studentID": "KRMU2428392",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Priyank Sharma",
      "studentID": "KRMU2431540",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Devansh Saini",
      "studentID": "KRMU2431609",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Suneesh",
      "studentID": "KRMU2431656",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Tarun Sharma",
      "studentID": "KRMU2424090",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Chirag Rohilla",
      "studentID": "KRMU2428231",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Jujhar Singh",
      "studentID": "KRMU2428333",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Harshit Rathi",
      "studentID": "KRMU2430661",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Vardaan Saini",
      "studentID": "KRMU2430690",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Ayesha",
      "studentID": "KRMU2431152",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Krish Sinha",
      "studentID": "KRMU2419807",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Randeep Kaur",
      "studentID": "KRMU2421879",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Pratyush Pratim Thakur",
      "studentID": "KRMU2422664",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Siddiq Khan",
      "studentID": "KRMU2423648",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Shraddha Chakravorty",
      "studentID": "KRMU2424494",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Ashish Rana",
      "studentID": "KRMU2424818",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Vanshika Yadav",
      "studentID": "KRMU2428010",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Priya Bora",
      "studentID": "KRMU2428938",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Netra Parkash",
      "studentID": "KRMU2429024",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Yashashvi",
      "studentID": "KRMU2429066",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Priya Darshni Sinha",
      "studentID": "KRMU2420565",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Shivani",
      "studentID": "KRMU2425240",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Rakshan Rana",
      "studentID": "KRMU2425252",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Ansh Kumar",
      "studentID": "KRMU2426880",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Devansh Kumar",
      "studentID": "KRMU2427256",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Akshay Yadav",
      "studentID": "KRMU2429032",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Kartiyan Jaiswal",
      "studentID": "KRMU2429388",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Bhragender Kumar Singh",
      "studentID": "KRMU2429415",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Naahar Solanki",
      "studentID": "KRMU2429765",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A213"
    },
    {
      "name": "Ridhima Singh",
      "studentID": "KRMU2430622",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Azhar Ali",
      "studentID": "KRMU2430955",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Sanya Kumari",
      "studentID": "KRMU2432075",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Neha Kumari Singh",
      "studentID": "KRMU2421694",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Gagan Goyal",
      "studentID": "KRMU2421828",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Shashi Kumr Ray",
      "studentID": "KRMU2422899",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Suhani Gupta",
      "studentID": "KRMU2425779",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Priya Shukla",
      "studentID": "KRMU2427233",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Khyati",
      "studentID": "KRMU2427753",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Pushti Verma",
      "studentID": "KRMU2429453",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Rohit Yadav",
      "studentID": "KRMU2429764",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Ashish Singh Rajput",
      "studentID": "KRMU2430762",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Gaurav Chauhan",
      "studentID": "KRMU2430861",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Sanyam Dahiya",
      "studentID": "KRMU2431401",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Aditi Arora",
      "studentID": "KRMU2431402",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Nirvikalp Singh",
      "studentID": "KRMU2431602",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Hem Prakash",
      "studentID": "KRMU2421745",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Pari Bansal",
      "studentID": "KRMU2422421",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Harshit Sharma",
      "studentID": "KRMU2423815",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Richa",
      "studentID": "KRMU2424060",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Mehul",
      "studentID": "KRMU2425315",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Palak Saini",
      "studentID": "KRMU2425828",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Utkrisht Vashisht",
      "studentID": "KRMU2426555",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Harsh Yadav",
      "studentID": "KRMU2427755",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Vaibhaw Raj",
      "studentID": "KRMU2428004",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Amit Kumar",
      "studentID": "KRMU2428261",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Devesh Kumar",
      "studentID": "KRMU2423069",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Komati Reddy Yashwanth Reddy",
      "studentID": "KRMU2424136",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Prince Kumar Sharma",
      "studentID": "KRMU2424679",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Deepak Makker",
      "studentID": "KRMU2425142",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Prateek Malik",
      "studentID": "KRMU2426394",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Suhani Sahu",
      "studentID": "KRMU2426528",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Soumya Ranjan Jena",
      "studentID": "KRMU2426614",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Suraj Kumar Yadav",
      "studentID": "KRMU2427863",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Harsh Kaushik",
      "studentID": "KRMU2431068",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Varsha Sinha",
      "studentID": "KRMU2431817",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Kunal Yadav",
      "studentID": "KRMU2432605",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Vishal",
      "studentID": "KRMU2420035",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Yash Gautam",
      "studentID": "KRMU2420587",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Akshit Kumar",
      "studentID": "KRMU2421124",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Himang Porwal",
      "studentID": "KRMU2421738",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Avanindr Singh",
      "studentID": "KRMU2422062",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Bhavesh Yadav",
      "studentID": "KRMU2422169",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Ved Singh",
      "studentID": "KRMU2422574",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Mayank Yadav S",
      "studentID": "KRMU2422676",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Ananya A",
      "studentID": "KRMU2423082",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Puneet Gulia",
      "studentID": "KRMU2423178",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Shivam Rana",
      "studentID": "KRMU2423838",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Divayam Sidhant Yadav",
      "studentID": "KRMU2424384",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Vikas Pannu",
      "studentID": "KRMU2424423",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Sohit Riyar",
      "studentID": "KRMU2424636",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Anmol Sah",
      "studentID": "KRMU2424705",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Pulkit Bhardwaj",
      "studentID": "KRMU2424721",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Abhay Pratap Parmar",
      "studentID": "KRMU2424810",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Megha Sharma",
      "studentID": "KRMU2424994",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Tanish Sangwan",
      "studentID": "KRMU2425281",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Yamini",
      "studentID": "KRMU2425766",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Pijus Mukherjee",
      "studentID": "KRMU2425794",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Kunal Garg",
      "studentID": "KRMU2426030",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Garv Kathuria",
      "studentID": "KRMU2426291",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Sourav Jha",
      "studentID": "KRMU2426745",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Vikas Kumar",
      "studentID": "KRMU2426895",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Kunal Attri",
      "studentID": "KRMU2426917",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Riya Goyal",
      "studentID": "KRMU2427051",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Tammana",
      "studentID": "KRMU2427390",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Piyush Kumar Sharma",
      "studentID": "KRMU2427464",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Dakshit Tyagi",
      "studentID": "KRMU2427479",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Kunal Kumar Thakur",
      "studentID": "KRMU2427538",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Prateek Sharma",
      "studentID": "KRMU2427847",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Tanuj Tiwari",
      "studentID": "KRMU2427885",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Krishna Gupta",
      "studentID": "KRMU2428445",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Ritik",
      "studentID": "KRMU2428843",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Khushal Agarwal",
      "studentID": "KRMU2428846",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Abhinav",
      "studentID": "KRMU2428874",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Mohit Goyal",
      "studentID": "KRMU2429050",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Rashi Bharwaj",
      "studentID": "KRMU2429188",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Rumman",
      "studentID": "KRMU2429284",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Bishnu Kumar",
      "studentID": "KRMU2429417",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Abhishek",
      "studentID": "KRMU2429493",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Vidhi Jindal",
      "studentID": "KRMU2429760",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Ankur Garg",
      "studentID": "KRMU2429809",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Harshit Sangwan",
      "studentID": "KRMU2429910",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Parakh Mittal",
      "studentID": "KRMU2429924",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Ankur",
      "studentID": "KRMU2430052",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A201"
    },
    {
      "name": "Avishka Bhardwaj",
      "studentID": "KRMU2430202",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Vasu Bhardwaj",
      "studentID": "KRMU2430307",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Yogesh Sherawat",
      "studentID": "KRMU2430575",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Aman Shehrawat",
      "studentID": "KRMU2430580",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Nishant Choudhary",
      "studentID": "KRMU2430587",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Sumit Pandey",
      "studentID": "KRMU2430604",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Tushar Kaushik",
      "studentID": "KRMU2430681",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Anshika Sunil Rai",
      "studentID": "KRMU2430752",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Tushar Singh",
      "studentID": "KRMU2430850",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Shikhar Gupta",
      "studentID": "KRMU2430961",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Jyothi",
      "studentID": "KRMU2431106",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Aaditya Saini",
      "studentID": "KRMU2425682",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Tejas Raghav",
      "studentID": "KRMU2431371",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Krish Malhotra S",
      "studentID": "KRMU2431391",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Krish Jangra",
      "studentID": "KRMU2431446",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Devansh Kumar Singh",
      "studentID": "KRMU2431617",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Mohammad Zaid",
      "studentID": "KRMU2431676",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Aaditya Saini",
      "studentID": "KRMU2432530",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Samit Singh",
      "studentID": "KRMU2431955",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Pratham Sharma",
      "studentID": "KRMU2431966",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Vaibhav Khanna",
      "studentID": "KRMU2432020",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Nandika Gupta",
      "studentID": "KRMU2432043",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Abhay",
      "studentID": "KRMU2422991",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Aayansh Vashisht",
      "studentID": "KRMU2432210",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Soham Arora",
      "studentID": "KRMU2432398",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Krish Jaidka",
      "studentID": "KRMU2432492",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Abhishek Kumar",
      "studentID": "KRMU2430352",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Nupur",
      "studentID": "KRMU2432782",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Deepali",
      "studentID": "KRMU2432856",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Aditya Kumar Singh",
      "studentID": "KRMU2429132",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Hridyansh Hansrani",
      "studentID": "KRMU2420043",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Ashok",
      "studentID": "KRMU2420634",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Manthan Jain",
      "studentID": "KRMU2421069",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Aman",
      "studentID": "KRMU2422104",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Sourav Yadav",
      "studentID": "KRMU2421272",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Bhumika",
      "studentID": "KRMU2421488",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Yashraj Pahuja",
      "studentID": "KRMU2421598",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Prerak",
      "studentID": "KRMU2422379",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Piyanjali",
      "studentID": "KRMU2422388",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Kavya",
      "studentID": "KRMU2422591",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Ansh",
      "studentID": "KRMU2422636",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Yash Yadav",
      "studentID": "KRMU2423118",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Ronaldo",
      "studentID": "KRMU2423128",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Sukesh",
      "studentID": "KRMU2423408",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Vaanya Bajaj",
      "studentID": "KRMU2423428",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Kush Sehrawat",
      "studentID": "KRMU2423601",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Aditya Bhanot",
      "studentID": "KRMU2423808",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Nakul",
      "studentID": "KRMU2424027",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Daksh Jhamb",
      "studentID": "KRMU2424692",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Arnav Kamboj",
      "studentID": "KRMU2424897",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Pranav",
      "studentID": "KRMU2424969",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Akash Usiyal",
      "studentID": "KRMU2425039",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Yash Vitthal Kshirsagar",
      "studentID": "KRMU2425072",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Muskan Singh",
      "studentID": "KRMU2425122",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Gurman Kaur",
      "studentID": "KRMU2425320",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Tripti",
      "studentID": "KRMU2425529",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Himanshu Gaur",
      "studentID": "KRMU2426041",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Ananya Singh",
      "studentID": "KRMU2426188",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Parth Rana",
      "studentID": "KRMU2426382",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Mishti Jain",
      "studentID": "KRMU2426501",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Bhumika Kukreja",
      "studentID": "KRMU2426930",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Siddharth Dagur",
      "studentID": "KRMU2427152",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Shekher",
      "studentID": "KRMU2427359",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Vinayak",
      "studentID": "KRMU2427415",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Neyasa Gupta",
      "studentID": "KRMU2427460",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Yash Singhal",
      "studentID": "KRMU2427844",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Shiv",
      "studentID": "KRMU2428476",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Aastha Bhardwaj",
      "studentID": "KRMU2428499",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Yug Verma",
      "studentID": "KRMU2428694",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Parinita Singh",
      "studentID": "KRMU2428871",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Anushka",
      "studentID": "KRMU2429114",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Aman",
      "studentID": "KRMU2425656",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Manav Joshi",
      "studentID": "KRMU2430157",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Aryan",
      "studentID": "KRMU2431128",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Anuj Tewatia",
      "studentID": "KRMU2430852",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Krish Chauhan",
      "studentID": "KRMU2431067",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Ayush Sharma",
      "studentID": "KRMU2428829",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Hitesh Deswal",
      "studentID": "KRMU2431256",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Tanishq Singh",
      "studentID": "KRMU2431517",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Shabd Mishra",
      "studentID": "KRMU2431535",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Sagar Jha",
      "studentID": "KRMU2431677",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Saurav",
      "studentID": "KRMU2431680",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Tanmay Nagpal",
      "studentID": "KRMU2431850",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Amandeep Pradhan",
      "studentID": "KRMU2432286",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A208"
    },
    {
      "name": "Mudit Sharma",
      "studentID": "KRMU2432659",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Anuj",
      "studentID": "KRMU2432830",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Ayush Sharma",
      "studentID": "KRMU2427559",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Chirag Sharma",
      "studentID": "KRMU2421123",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Deepanshu",
      "studentID": "KRMU2430586",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Dhruv",
      "studentID": "KRMU2429915",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Divyansh",
      "studentID": "KRMU2432660",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Garima",
      "studentID": "KRMU2423797",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Gaurav",
      "studentID": "KRMU2426129",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Gaurav Rana",
      "studentID": "KRMU2429261",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Hardik",
      "studentID": "KRMU2424673",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Harsh",
      "studentID": "KRMU2431836",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Harshit",
      "studentID": "KRMU2421666",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Himanshu",
      "studentID": "KRMU2428487",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Jatin",
      "studentID": "KRMU2430488",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Kartik",
      "studentID": "KRMU2427483",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Kartik",
      "studentID": "KRMU2430700",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Krish",
      "studentID": "KRMU2427125",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Kunal",
      "studentID": "KRMU2432893",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Nishant",
      "studentID": "KRMU2421639",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Pankaj",
      "studentID": "KRMU2425325",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Piyush",
      "studentID": "KRMU2426118",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Piyush",
      "studentID": "KRMU2429551",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Piyush",
      "studentID": "KRMU2428862",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Preet Singh",
      "studentID": "KRMU2431132",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Radhika",
      "studentID": "KRMU2430047",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Rohit Kumar",
      "studentID": "KRMU2426196",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Sameer",
      "studentID": "KRMU2425519",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Shubham",
      "studentID": "KRMU2426676",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Tarun",
      "studentID": "KRMU2421436",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Tushar",
      "studentID": "KRMU2425263",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Vikram",
      "studentID": "KRMU2432078",
      "programme": "B.Tech CSE (AI & ML) with academic support of Samatrix & IBM",
      "room": "A211"
    },
    {
      "name": "Abhishek Kumar",
      "studentID": "KRMU2432009",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Aman",
      "studentID": "KRMU2430389",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Gaurav Sharma",
      "studentID": "KRMU2429752",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Dhruv Kumar Kapil",
      "studentID": "KRMU2424221",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Nandini Sharma",
      "studentID": "KRMU2425433",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Kavya Sharma",
      "studentID": "KRMU2423034",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Chanchal Yadav",
      "studentID": "KRMU2425658",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Alishna Singh",
      "studentID": "KRMU2422656",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Atharva Gaur",
      "studentID": "KRMU2424541",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Bhanuri Dinesh",
      "studentID": "KRMU2427036",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Sourav",
      "studentID": "KRMU2425335",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Prem",
      "studentID": "KRMU2421182",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Bhavishya Yadav",
      "studentID": "KRMU2423417",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Arnav",
      "studentID": "KRMU2426147",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Nirmit Dudeja",
      "studentID": "KRMU2426125",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Krishna",
      "studentID": "KRMU2431828",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Rudra Bhargav",
      "studentID": "KRMU2421243",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Anshu",
      "studentID": "KRMU2430771",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Chetna Singhal",
      "studentID": "KRMU2431651",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Kushagra Jain",
      "studentID": "KRMU2426272",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Sidhaant Menon",
      "studentID": "KRMU2419820",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Kushagra Rathore",
      "studentID": "KRMU2426154",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Dhuruv",
      "studentID": "KRMU2420521",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Dheeraj Yadav",
      "studentID": "KRMU2425592",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Neeraj Yadav",
      "studentID": "KRMU2425939",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Avinash Kumar",
      "studentID": "KRMU2429162",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Uday Biswas",
      "studentID": "KRMU2429428",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Yuvraj Soni",
      "studentID": "KRMU2430358",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Neetu Raghav",
      "studentID": "KRMU2431853",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Atika Nazir Zoha",
      "studentID": "KRMU2432073",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Vanshika Rani",
      "studentID": "KRMU2432738",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Pallavi P Baiju",
      "studentID": "KRMU2424120",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Yash Fogaat",
      "studentID": "KRMU2426844",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Rohan Yadav",
      "studentID": "KRMU2427861",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Vikash Pusty",
      "studentID": "KRMU2430761",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Ishan Dua",
      "studentID": "KRMU2431287",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Tanish Verma",
      "studentID": "KRMU2431839",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Vishal Deshwal",
      "studentID": "KRMU2432794",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Payal",
      "studentID": "KRMU2425593",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Piyush",
      "studentID": "KRMU2428747",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Rahul Yadav",
      "studentID": "KRMU2426959",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Vivek",
      "studentID": "KRMU2430958",
      "programme": "B.Tech CSE (Cyber Security) EC-Council",
      "room": "A206"
    },
    {
      "name": "Aman Singh",
      "studentID": "KRMU2422594",
      "programme": "B.Tech CSE (Cyber Security) with academic support of EC-Council & IBM",
      "room": "A206"
    },
    {
      "name": "Shashikant",
      "studentID": "KRMU2420691",
      "programme": "B.Tech CSE (Cyber Security) with academic support of EC-Council & IBM",
      "room": "A206"
    },
    {
      "name": "Krishna Kumar Singh",
      "studentID": "KRMU2422662",
      "programme": "B.Tech CSE (Cyber Security) with academic support of EC-Council & IBM",
      "room": "A206"
    },
    {
      "name": "Sahil Raj",
      "studentID": "KRMU2422732",
      "programme": "B.Tech CSE (Cyber Security) with academic support of EC-Council & IBM",
      "room": "A206"
    },
    {
      "name": "Deepti Shaw",
      "studentID": "KRMU2424502",
      "programme": "B.Tech CSE (Cyber Security) with academic support of EC-Council & IBM",
      "room": "A206"
    },
    {
      "name": "Shashank Kumar",
      "studentID": "KRMU2421838",
      "programme": "B.Tech CSE (Cyber Security) with academic support of EC-Council & IBM",
      "room": "A206"
    },
    {
      "name": "Archit",
      "studentID": "KRMU2420892",
      "programme": "B.Tech CSE (Cyber Security) with academic support of EC-Council & IBM",
      "room": "A206"
    },
    {
      "name": "Tanya Shivhare",
      "studentID": "KRMU2422862",
      "programme": "B.Tech CSE (Cyber Security) with academic support of EC-Council & IBM",
      "room": "A206"
    },
    {
      "name": "Jaskeerat Singh",
      "studentID": "KRMU2421255",
      "programme": "B.Tech CSE (Cyber Security) with academic support of EC-Council & IBM",
      "room": "A206"
    },
    {
      "name": "Parth Sharma",
      "studentID": "KRMU2424896",
      "programme": "B.Tech CSE (Cyber Security) with academic support of EC-Council & IBM",
      "room": "A206"
    },
    {
      "name": "Arvind Janghu",
      "studentID": "KRMU2419795",
      "programme": "B.Tech CSE (Cyber Security) with academic support of EC-Council & IBM",
      "room": "A206"
    },
    {
      "name": "Aditya Kumar Singh",
      "studentID": "KRMU2421275",
      "programme": "B.Tech CSE (Data Science) with academic support of IBM",
      "room": "A301"
    },
    {
      "name": "Yogya Sharma",
      "studentID": "KRMU2420157",
      "programme": "B.Tech CSE (Data Science) with academic support of IBM",
      "room": "A301"
    },
    {
      "name": "Najim Khan",
      "studentID": "KRMU2423856",
      "programme": "B.Tech CSE (Data Science) with academic support of IBM",
      "room": "A301"
    },
    {
      "name": "Arpita Boben",
      "studentID": "KRMU2421878",
      "programme": "B.Tech CSE (Data Science) with academic support of IBM",
      "room": "A301"
    },
    {
      "name": "Parv Arora",
      "studentID": "KRMU2424071",
      "programme": "B.Tech CSE (Data Science) with academic support of IBM",
      "room": "A301"
    },
    {
      "name": "Sourabh Suman",
      "studentID": "KRMU2420445",
      "programme": "B.Tech CSE (Data Science) with academic support of IBM",
      "room": "A301"
    },
    {
      "name": "Uday Kandpal",
      "studentID": "KRMU2421931",
      "programme": "B.Tech CSE (Data Science) with academic support of IBM",
      "room": "A301"
    },
    {
      "name": "Mratunjay Tripathi",
      "studentID": "KRMU2422508",
      "programme": "B.Tech CSE (Data Science) with academic support of IBM",
      "room": "A301"
    },
    {
      "name": "Abhishek Thakur",
      "studentID": "KRMU2422921",
      "programme": "B.Tech CSE (Data Science) with academic support of IBM",
      "room": "A301"
    },
    {
      "name": "Satyam Singh",
      "studentID": "KRMU2423526",
      "programme": "B.Tech CSE (Data Science) with academic support of IBM",
      "room": "A301"
    },
    {
      "name": "Hritunjaya Chauhan",
      "studentID": "KRMU2420802",
      "programme": "B.Tech CSE (Data Science) with academic support of IBM",
      "room": "A301"
    },
    {
      "name": "Yashraj Rawani",
      "studentID": "KRMU2422252",
      "programme": "B.Tech CSE (Data Science) with academic support of IBM",
      "room": "A301"
    },
    {
      "name": "Bhavishya Tyagi",
      "studentID": "KRMU2424754",
      "programme": "B.Tech CSE (Data Science) with academic support of IBM",
      "room": "A301"
    },
    {
      "name": "Mishti Saxena",
      "studentID": "KRMU2423690",
      "programme": "B.Tech CSE (Data Science) with academic support of IBM",
      "room": "A301"
    },
    {
      "name": "Gaurav Rana",
      "studentID": "KRMU2426365",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Himanshu",
      "studentID": "KRMU2430268",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Kunal",
      "studentID": "KRMU2424408",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Aabha Tomar",
      "studentID": "KRMU2421806",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Pryanshu Kumar",
      "studentID": "KRMU2429744",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Rahul Rana",
      "studentID": "KRMU2426853",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Vansh Rana",
      "studentID": "KRMU2427048",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Manya Yadav",
      "studentID": "KRMU2427374",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Sonam",
      "studentID": "KRMU2426436",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Vidit Bansal",
      "studentID": "KRMU2426403",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Yash Maan",
      "studentID": "KRMU2429825",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Raman Singh",
      "studentID": "KRMU2429054",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Chetna Sharma",
      "studentID": "KRMU2429288",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Shashwat Tripathi",
      "studentID": "KRMU2425169",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Priyanshi Budhwar",
      "studentID": "KRMU2426754",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Jahanvi Deswal",
      "studentID": "KRMU2427005",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Yash Tiwari",
      "studentID": "KRMU2427244",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Parth Goyal",
      "studentID": "KRMU2431639",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Raman",
      "studentID": "KRMU2431856",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Ashwani Kumar Thakur",
      "studentID": "KRMU2423514",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Om Singh",
      "studentID": "KRMU2427064",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Utsav Singhal",
      "studentID": "KRMU2427400",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Pranav Singh",
      "studentID": "KRMU2428402",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Rinkesh",
      "studentID": "KRMU2428839",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Hemant Saini",
      "studentID": "KRMU2428841",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Kunal Thakran",
      "studentID": "KRMU2428854",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Sudhiksha Jha",
      "studentID": "KRMU2429322",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Kumar Harsh",
      "studentID": "KRMU2430127",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Nirbhay Gill",
      "studentID": "KRMU2430782",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Sakshi",
      "studentID": "KRMU2431196",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Pratyush Singh",
      "studentID": "KRMU2431245",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Sakshi Singh",
      "studentID": "KRMU2432445",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Md Anas Khan",
      "studentID": "KRMU2424246",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Nishant",
      "studentID": "KRMU2431203",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Kartik Sharma",
      "studentID": "KRMU2427265",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Shubham",
      "studentID": "KRMU2428052",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Tushar",
      "studentID": "KRMU2428826",
      "programme": "B.Tech CSE (DS) IBM",
      "room": "A301"
    },
    {
      "name": "Aryan",
      "studentID": "KRMU2427852",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Vansh Goyal",
      "studentID": "KRMU2426190",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Rashi Yadav",
      "studentID": "KRMU2422159",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Saumya Barthwal",
      "studentID": "KRMU2427470",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Abhay Mundepi",
      "studentID": "KRMU2423698",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Sanjeev",
      "studentID": "KRMU2423784",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Harsh Panchal",
      "studentID": "KRMU2428127",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Yuvraj Saini",
      "studentID": "KRMU2427369",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Krish Shokeen",
      "studentID": "KRMU2430981",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Anshika Trikha",
      "studentID": "KRMU2424579",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Devansh Thakur",
      "studentID": "KRMU2425487",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Dev Yadav",
      "studentID": "KRMU2430510",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Shailjanand",
      "studentID": "KRMU2422370",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Manju",
      "studentID": "KRMU2423600",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Tarun Yadav",
      "studentID": "KRMU2429461",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Abhishek Jayasingh",
      "studentID": "KRMU2423064",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Harini Sri",
      "studentID": "KRMU2423369",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Subhrajeet Dash",
      "studentID": "KRMU2424802",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Aaditya",
      "studentID": "KRMU2427884",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Gantavaya Minocha",
      "studentID": "KRMU2428468",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Adit Ghosh",
      "studentID": "KRMU2430526",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Sachin",
      "studentID": "KRMU2422392",
      "programme": "B.Tech CSE (Full Stack Development) with academic support of Xebia",
      "room": "A209"
    },
    {
      "name": "Lokesh Deshwal",
      "studentID": "KRMU2422733",
      "programme": "B.Tech CSE (lateral) (Data Science) with academic support of IBM",
      "room": "A115"
    },
    {
      "name": "Yash Raj",
      "studentID": "KRMU2430341",
      "programme": "B.Tech CSE (lateral) (Data Science) with academic support of IBM",
      "room": "A115"
    },
    {
      "name": "Abhay",
      "studentID": "KRMU2427295",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Ashish Kumar",
      "studentID": "KRMU2431339",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Dolly",
      "studentID": "KRMU2423377",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Nikhil",
      "studentID": "KRMU2430895",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Prasun Debnath",
      "studentID": "KRMU2419964",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Falguni Tandon",
      "studentID": "KRMU2420171",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Kirat Pal",
      "studentID": "KRMU2428340",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Akshat Kumar Arya",
      "studentID": "KRMU2427421",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Rupesh Kumar",
      "studentID": "KRMU2422465",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Yashaswa Srivastava",
      "studentID": "KRMU2421859",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Kavya Devgan",
      "studentID": "KRMU2421170",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Saurabh Singh",
      "studentID": "KRMU2421755",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Gauri",
      "studentID": "KRMU2422613",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Hitesh Kumar Sahu",
      "studentID": "KRMU2422900",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Harsh Gupta",
      "studentID": "KRMU2423565",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Shiv Dev",
      "studentID": "KRMU2424008",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Saumil",
      "studentID": "KRMU2424050",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Saksham Singh",
      "studentID": "KRMU2424072",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Kushagra Jadon",
      "studentID": "KRMU2424390",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Anushika Singh",
      "studentID": "KRMU2426005",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Shivani Rai",
      "studentID": "KRMU2426271",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Kumari Priya",
      "studentID": "KRMU2428225",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Shaurya Sagar",
      "studentID": "KRMU2428771",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Sheefali Saini",
      "studentID": "KRMU2429019",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Parneet Kaur",
      "studentID": "KRMU2430507",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Naitik Prateek",
      "studentID": "KRMU2430839",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Sunidhi",
      "studentID": "KRMU2431145",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Sumit Sharma",
      "studentID": "KRMU2431865",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Jeewansh",
      "studentID": "KRMU2432027",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Himani",
      "studentID": "KRMU2432118",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Subhasmita Mishra",
      "studentID": "KRMU2432122",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Anjali Kumari",
      "studentID": "KRMU2432413",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Ayush Singh",
      "studentID": "KRMU2432512",
      "programme": "B.Tech CSE (UX/UI) with academic support of ImaginXP",
      "room": "A209"
    },
    {
      "name": "Aditya",
      "studentID": "KRMU2430405",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Aman",
      "studentID": "KRMU2431143",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Aman",
      "studentID": "KRMU2432439",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Deepak",
      "studentID": "KRMU2431375",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Deepanshu",
      "studentID": "KRMU2427242",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Garima",
      "studentID": "KRMU2420520",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Harsh",
      "studentID": "KRMU2430172",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Harshit",
      "studentID": "KRMU2426145",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Himanshu",
      "studentID": "KRMU2421677",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Khushi",
      "studentID": "KRMU2430373",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Khushi",
      "studentID": "KRMU2432334",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Manish Yadav",
      "studentID": "KRMU2432533",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Neha",
      "studentID": "KRMU2425723",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Nikhil",
      "studentID": "KRMU2428200",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Nitin Kumar",
      "studentID": "KRMU2430840",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Pankaj",
      "studentID": "KRMU2432801",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Pankaj",
      "studentID": "KRMU2432819",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Sagar Panwar",
      "studentID": "KRMU2421284",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Anurag Anand",
      "studentID": "KRMU2425246",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Bhavya Rattan",
      "studentID": "KRMU2425701",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Mehul Srivastava",
      "studentID": "KRMU2424205",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Shivani Yadav",
      "studentID": "KRMU2428298",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Rijul Arora",
      "studentID": "KRMU2425312",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Ved Prakash",
      "studentID": "KRMU2427579",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Sandhya Rani",
      "studentID": "KRMU2422756",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Rohan Gopal Das",
      "studentID": "KRMU2428724",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Dhruv Gupta",
      "studentID": "KRMU2419924",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Shivam Gaur",
      "studentID": "KRMU2426468",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Pratyush Jha",
      "studentID": "KRMU2422276",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Athira . J",
      "studentID": "KRMU2427027",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Nonihal Singh",
      "studentID": "KRMU2427340",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Kshitij Marwah",
      "studentID": "KRMU2421234",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Sahil Sahani",
      "studentID": "KRMU2423440",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Piyush Vats",
      "studentID": "KRMU2425703",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Kaashvi",
      "studentID": "KRMU2425707",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Rittik Kumar",
      "studentID": "KRMU2426846",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Bhumittanwar",
      "studentID": "KRMU2421954",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Lakshay Dangwal",
      "studentID": "KRMU2425429",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Harshit Malik",
      "studentID": "KRMU2421522",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Aniket Chauhan",
      "studentID": "KRMU2421990",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Shashank Tyagi",
      "studentID": "KRMU2422702",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Drishti Jain",
      "studentID": "KRMU2431076",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Yash Lamba",
      "studentID": "KRMU2428833",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Teesha",
      "studentID": "KRMU2431155",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Sophia Soni",
      "studentID": "KRMU2426685",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Aakriti Singh",
      "studentID": "KRMU2426760",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Kushagra Verma",
      "studentID": "KRMU2428275",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Aditya Shibu",
      "studentID": "KRMU2421747",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Akshit",
      "studentID": "KRMU2422716",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Namrata Muralidharan",
      "studentID": "KRMU2423794",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Khalid Moeen",
      "studentID": "KRMU2426863",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Jiya",
      "studentID": "KRMU2427306",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Pushkar Mishra",
      "studentID": "KRMU2429906",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Himanshi Tanwar",
      "studentID": "KRMU2431432",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Sia Luthra",
      "studentID": "KRMU2419906",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Harinand S Parayil",
      "studentID": "KRMU2421840",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Harshit Kumar",
      "studentID": "KRMU2424708",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Ridhima Saini",
      "studentID": "KRMU2425032",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Ujjwal Chauhan",
      "studentID": "KRMU2425783",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Md. Zaid",
      "studentID": "KRMU2426851",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A103"
    },
    {
      "name": "Abhishek Singh",
      "studentID": "KRMU2427383",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Rakesh",
      "studentID": "KRMU2427472",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Divesh Singh",
      "studentID": "KRMU2428260",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Vansh Choudhary",
      "studentID": "KRMU2428398",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Priyanshu",
      "studentID": "KRMU2429016",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Shivang Tomar",
      "studentID": "KRMU2429511",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Priyanshu Khatana",
      "studentID": "KRMU2424943",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Riyaan Chawla",
      "studentID": "KRMU2426019",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Anurag Mishra",
      "studentID": "KRMU2423135",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Mohit Chandoliya",
      "studentID": "KRMU2427305",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Pratul Dham",
      "studentID": "KRMU2428836",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Greaty Raghav",
      "studentID": "KRMU2429541",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Tushar Kataria",
      "studentID": "KRMU2432032",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Vasee Ahamad",
      "studentID": "KRMU2423908",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Nandini Kumari",
      "studentID": "KRMU2424559",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Harsh Nagal",
      "studentID": "KRMU2422526",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Nitish Kumar Singh",
      "studentID": "KRMU2422667",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Dipesh Singh",
      "studentID": "KRMU2424827",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Prasen",
      "studentID": "KRMU2425366",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Aditya Mangal",
      "studentID": "KRMU2428202",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Shreyansh Vaibhaw",
      "studentID": "KRMU2429810",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Shubham Rathi",
      "studentID": "KRMU2424816",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Vicky Mehra",
      "studentID": "KRMU2428479",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Bhavay Parmar",
      "studentID": "KRMU2420263",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Shakti Singh",
      "studentID": "KRMU2425613",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Shreya Bose",
      "studentID": "KRMU2426826",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Ayush Verma",
      "studentID": "KRMU2428970",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Aryan Sareen",
      "studentID": "KRMU2430155",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Vivan Kumar",
      "studentID": "KRMU2430212",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Sachin",
      "studentID": "KRMU2420460",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Sujal Tomar",
      "studentID": "KRMU2432535",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Teeya",
      "studentID": "KRMU2421023",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Aditya Kaushik",
      "studentID": "KRMU2421909",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Parth Wadhwa",
      "studentID": "KRMU2422301",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Jyoti",
      "studentID": "KRMU2423805",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Khyati Kalra",
      "studentID": "KRMU2424239",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Harleen Kaur",
      "studentID": "KRMU2425415",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Moksh Duhan",
      "studentID": "KRMU2427224",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Deevanshi Sarraf",
      "studentID": "KRMU2429014",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Sonu Kumar Jha",
      "studentID": "KRMU2429252",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Bhumika Khandelwal",
      "studentID": "KRMU2429589",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Himanshi",
      "studentID": "KRMU2429648",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Gaurav Singh",
      "studentID": "KRMU2429961",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Nikhil Singh",
      "studentID": "KRMU2430483",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Yashica Gusain",
      "studentID": "KRMU2430594",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Harshita Batra",
      "studentID": "KRMU2430606",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Diya",
      "studentID": "KRMU2430695",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Siddharth Kumar",
      "studentID": "KRMU2431288",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Avinash Nagar",
      "studentID": "KRMU2431462",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Ayush",
      "studentID": "KRMU2431675",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Mayank Chauhan",
      "studentID": "KRMU2432062",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Vansh Aggarwal",
      "studentID": "KRMU2432136",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Aryan Sharma",
      "studentID": "KRMU2432197",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Kumar Paritosh",
      "studentID": "KRMU2432316",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Shreya Kapoor",
      "studentID": "KRMU2432675",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Anik Dangi",
      "studentID": "KRMU2432722",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Aashish Yadav",
      "studentID": "KRMU2432811",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Hitesh Shukla",
      "studentID": "KRMU2432828",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Akash Sharma",
      "studentID": "KRMU2432245",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Diksha Goel",
      "studentID": "KRMU2431820",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Sohail Khan",
      "studentID": "KRMU2420086",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Ashina Naaz Khan",
      "studentID": "KRMU2420845",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Gauransh Pawar",
      "studentID": "KRMU2421214",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Sohail Khan",
      "studentID": "KRMU2428618",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Tamanna",
      "studentID": "KRMU2430998",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Aman Kumar",
      "studentID": "KRMU2424975",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Taranjeet Singh",
      "studentID": "KRMU2425061",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Tamanna",
      "studentID": "KRMU2422449",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Aditya Kr Singh",
      "studentID": "KRMU2426675",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Karan Singh",
      "studentID": "KRMU2428411",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Yashika Rawat",
      "studentID": "KRMU2428607",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Dharampal",
      "studentID": "KRMU2430362",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Lakshay Jain",
      "studentID": "KRMU2430592",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Nitin",
      "studentID": "KRMU2430621",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Megh Singh",
      "studentID": "KRMU2431119",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Bhoomika",
      "studentID": "KRMU2431141",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Shreya",
      "studentID": "KRMU2431559",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Shivam Yadav",
      "studentID": "KRMU2431575",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Divyanshi Kishore",
      "studentID": "KRMU2432487",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Chetna Manral",
      "studentID": "KRMU2432504",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A308"
    },
    {
      "name": "Vaibhav",
      "studentID": "KRMU2431987",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Vansh",
      "studentID": "KRMU2428657",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Vikram",
      "studentID": "KRMU2426506",
      "programme": "BCA (AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Gaurav Yadav",
      "studentID": "KRMU2424788",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Kushagra Jain",
      "studentID": "KRMU2432000",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Tarun",
      "studentID": "KRMU2425866",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Jatin Ragahav",
      "studentID": "KRMU2424279",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Yashvi Sahu",
      "studentID": "KRMU2420488",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Yashika Goud",
      "studentID": "KRMU2429268",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Hemant Mukhiya",
      "studentID": "KRMU2422204",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Samay Bohra",
      "studentID": "KRMU2423550",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Aryan Maurya",
      "studentID": "KRMU2422736",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Richa Sharma",
      "studentID": "KRMU2422356",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Priyanshu Mandal",
      "studentID": "KRMU2427039",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Parth Behera",
      "studentID": "KRMU2426048",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Mohak Verma",
      "studentID": "KRMU2428368",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Rafia Khan",
      "studentID": "KRMU2420588",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Shailja Rathore",
      "studentID": "KRMU2426229",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Rajat Rao",
      "studentID": "KRMU2428658",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Karmveer Singh Gehlot",
      "studentID": "KRMU2423852",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Sharandeep Kaur",
      "studentID": "KRMU2427866",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Anish Chhetri",
      "studentID": "KRMU2426301",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Sam",
      "studentID": "KRMU2430253",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Pakhi Pal",
      "studentID": "KRMU2419841",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Tanish Sabharwal",
      "studentID": "KRMU2431684",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Anjali Sharma",
      "studentID": "KRMU2430334",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Vansh Vashisht",
      "studentID": "KRMU2422105",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Vikramjeet Sinha",
      "studentID": "KRMU2422195",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Eklavya",
      "studentID": "KRMU2423345",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Ajay Singh",
      "studentID": "KRMU2424348",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Aaditya Verma",
      "studentID": "KRMU2425041",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Sanskar Gupta",
      "studentID": "KRMU2425621",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Anshika Singh",
      "studentID": "KRMU2428339",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Vrinda Verma",
      "studentID": "KRMU2422291",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Karamjeet",
      "studentID": "KRMU2422457",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Laishram Gingkorbin Singh",
      "studentID": "KRMU2425223",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Gopikrishnan",
      "studentID": "KRMU2427393",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Youvansh Sharma",
      "studentID": "KRMU2431741",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Shweta Jha",
      "studentID": "KRMU2432026",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Sahil",
      "studentID": "KRMU2432471",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Vaibhav",
      "studentID": "KRMU2426295",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Vivek",
      "studentID": "KRMU2428274",
      "programme": "BCA (Hons. with Research)(AI & Data Science) with academic support of Samatrix & IBM",
      "room": "A105"
    },
    {
      "name": "Abhinav Singh",
      "studentID": "KRMU2430979",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Adarsh",
      "studentID": "KRMU2422668",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Ajay",
      "studentID": "KRMU2432320",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Ankit",
      "studentID": "KRMU2428173",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Ashish Kumar",
      "studentID": "KRMU2427513",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Ayush Kumar",
      "studentID": "KRMU2429943",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Chirag Sharma",
      "studentID": "KRMU2425381",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Kunal",
      "studentID": "KRMU2424748",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Manish Yadav",
      "studentID": "KRMU2429280",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Neha",
      "studentID": "KRMU2429442",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Utkarsh Singh",
      "studentID": "KRMU2430374",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Abhinay Kumar",
      "studentID": "KRMU2425857",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Jaishree Parashar",
      "studentID": "KRMU2428927",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Khushal",
      "studentID": "KRMU2431346",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Deepti",
      "studentID": "KRMU2431511",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Manav Sharma",
      "studentID": "KRMU2421974",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Rekha Kumayan",
      "studentID": "KRMU2423624",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Aprajita Kumari",
      "studentID": "KRMU2425390",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Ritesh Jha",
      "studentID": "KRMU2426186",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Sanjay Kumar",
      "studentID": "KRMU2427519",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Tanisha",
      "studentID": "KRMU2429275",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Chanderhas",
      "studentID": "KRMU2429537",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Niranjan",
      "studentID": "KRMU2421555",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Surbhi Priya",
      "studentID": "KRMU2422432",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Chhaya Singh",
      "studentID": "KRMU2425792",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Tanishq",
      "studentID": "KRMU2428255",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Brajesh Kumar",
      "studentID": "KRMU2429276",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Ashvanee",
      "studentID": "KRMU2429405",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Anupam Kumari",
      "studentID": "KRMU2420102",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Uma Bharti",
      "studentID": "KRMU2422658",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Nitesh",
      "studentID": "KRMU2425407",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Lokesh Dwivedi",
      "studentID": "KRMU2429277",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Karan Soalnki",
      "studentID": "KRMU2421647",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Sanskar Saurabh",
      "studentID": "KRMU2422147",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Harsh Sharma",
      "studentID": "KRMU2427649",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Pallavi",
      "studentID": "KRMU2427822",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Harshvardhan Singh",
      "studentID": "KRMU2427848",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Vandana",
      "studentID": "KRMU2427858",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Bhavya",
      "studentID": "KRMU2429144",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Kanishak Choudhary",
      "studentID": "KRMU2429149",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Jaskaran Dhillon",
      "studentID": "KRMU2428783",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Kajal Garg",
      "studentID": "KRMU2430983",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Jatin Bhardwaj",
      "studentID": "KRMU2420014",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Sujal Sandhu",
      "studentID": "KRMU2421021",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Anjali Verma",
      "studentID": "KRMU2421630",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Priyanshu Dhall",
      "studentID": "KRMU2423305",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Vipin Kumar",
      "studentID": "KRMU2427274",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Nibha Kumari",
      "studentID": "KRMU2427754",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Akash Kumar",
      "studentID": "KRMU2427803",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Sheetal",
      "studentID": "KRMU2428939",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Jimni Gogoi",
      "studentID": "KRMU2428955",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Anantika Paul",
      "studentID": "KRMU2428959",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Pawan Garg",
      "studentID": "KRMU2429508",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Pooja Kumari",
      "studentID": "KRMU2430597",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Anjali Thakur",
      "studentID": "KRMU2430610",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Himanshu Jain",
      "studentID": "KRMU2431061",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Anuj Mangal",
      "studentID": "KRMU2431065",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Aafan",
      "studentID": "KRMU2431129",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Shruti Jain",
      "studentID": "KRMU2431412",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Rishav Mishra",
      "studentID": "KRMU2431507",
      "programme": "MCA",
      "room": "A203"
    },
    {
      "name": "Annu Yadav",
      "studentID": "KRMU2432233",
      "programme": "MCA",
      "room": "A214"
    },
    {
      "name": "Pankaj Kumar Yadav",
      "studentID": "KRMU2432536",
      "programme": "MCA",
      "room": "A214"
    },
    {
      "name": "Hitesh Jadaun",
      "studentID": "KRMU2432823",
      "programme": "MCA",
      "room": "A214"
    },
    {
      "name": "Swati",
      "studentID": "KRMU2420338",
      "programme": "MCA",
      "room": "A214"
    },
    {
      "name": "Jitin Kumar Sengar",
      "studentID": "KRMU2424768",
      "programme": "MCA",
      "room": "A214"
    },
    {
      "name": "Mansi",
      "studentID": "KRMU2425706",
      "programme": "MCA",
      "room": "A214"
    },
    {
      "name": "Ajay Kumar",
      "studentID": "KRMU2429464",
      "programme": "MCA",
      "room": "A214"
    },
    {
      "name": "Riya Kumari",
      "studentID": "KRMU2429901",
      "programme": "MCA",
      "room": "A214"
    },
    {
      "name": "Prashant",
      "studentID": "KRMU2429956",
      "programme": "MCA",
      "room": "A214"
    },
    {
      "name": "Sarita",
      "studentID": "KRMU2430083",
      "programme": "MCA",
      "room": "A214"
    },
    {
      "name": "Ayaan Rehman",
      "studentID": "KRMU2430540",
      "programme": "MCA",
      "room": "A214"
    },
    {
      "name": "Aman Chourasia",
      "studentID": "KRMU2431439",
      "programme": "MCA",
      "room": "A214"
    },
    {
      "name": "Sumit Kumar",
      "studentID": "KRMU2431622",
      "programme": "MCA",
      "room": "A214"
    },
    {
      "name": "Shalu",
      "studentID": "KRMU2431760",
      "programme": "MCA",
      "room": "A214"
    },
    {
      "name": "Kuldeep",
      "studentID": "KRMU2431946",
      "programme": "MCA",
      "room": "A214"
    }
  ]
};

const ErrorMessage = ({ message }) => (
  <div className="text-danger m-2 w-30 text-center" role="alert">
    {message}
  </div>
);

const Loader = () => (
  <div className="d-flex justify-content-center align-items-center bg-dark text-light" style={{ height: '90vh' }}>
    <div className="spinner-grow" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

const RoomFinder = () => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState('');
  const [input, setInput] = useState('');
  const [studentID, setStudentID] = useState('');
  const [room, setRoom] = useState('');
  const [error, setError] = useState('');
  const [inputLabel, setInputLabel] = useState('Enter Your Name or KRMU Application ID');
  const [promptForID, setPromptForID] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const uniqueCourses = [...new Set(data.Data.map(student => student.programme))];
      setCourses(uniqueCourses);
      setLoading(false);
    }, 2500);
  }, []);

  const isApplicationID = useCallback((value) => /^KRMU\d{7}$/.test(value), []);

  const findStudent = useCallback(() => {
    if (!selectedCourse || !input) {
      setError('Please select a course and enter your name or KRMU Application ID.');
      return [];
    }

    if (isApplicationID(input)) {
      return data.Data.filter(
        student => student.programme === selectedCourse && student.studentID === input
      );
    } else {
      return data.Data.filter(
        student => student.programme === selectedCourse && student.name.toLowerCase() === input.toLowerCase()
      );
    }
  }, [selectedCourse, input, isApplicationID]);

  const handleSearch = () => {
    setError('');
    setRoom('');
    setPromptForID(false);
    setButtonLoading(true);

    setTimeout(() => {
      const filteredStudents = findStudent();

      if (filteredStudents.length === 0) {
        setError('No student found with the provided details.');
      } else if (filteredStudents.length === 1) {
        setRoom(filteredStudents[0].room);
        setShowForm(false);
      } else {
        setInput('');
        setInputLabel('Enter KRMU Application ID to Continue');
        setPromptForID(true);
        setError('Multiple students found with the same name. Please enter your KRMU Application ID.');
      }

      setButtonLoading(false);
    }, 1000);
  };

  const handleReset = () => {
    setShowForm(true);
    setSelectedCourse('');
    setInput('');
    setStudentID('');
    setRoom('');
    setError('');
    setPromptForID(false);
    setInputLabel('Enter Your Name or KRMU Application ID');
  };

  if (loading) return <Loader />;

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center bg-dark text-light" style={{ height: '90vh', width: '100%' }}>
      <img
        style={{ width: '100px', marginBottom: '30px' }}
        src="https://upload.wikimedia.org/wikipedia/en/thumb/3/38/K.R._Mangalam_University_logo.svg/1200px-K.R._Mangalam_University_logo.svg.png"
        alt=""
        className="d-block mx-auto"
      />
      <h4 className="text-center">Induction 2024 - SOET</h4>
      <h1 className="text-center mb-4">Find Your Allotted Room</h1>

      {showForm && (
        <>
          <div className="mb-3 col-10 col-md-4 col-lg-5">
            <label htmlFor="courseSelect" className="form-label">Select Your Course</label>
            <select
              id="courseSelect"
              className="form-select bg-dark text-light border-secondary"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="">Select Course</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>{course}</option>
              ))}
            </select>
          </div>

          {!promptForID && (
            <div className="mb-3 col-10 col-md-4 col-lg-5">
              <label htmlFor="inputField" className="form-label">{inputLabel}</label>
              <input
                type="text"
                id="inputField"
                className="form-control bg-dark text-light border-secondary"
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
          )}

          {promptForID && (
            <div className="mb-4 col-10 col-md-4 col-lg-5">
              <label htmlFor="idInput" className="form-label">Enter Your KRMU Application ID</label>
              <input
                type="text"
                id="idInput"
                className="form-control bg-dark text-light border-secondary"
                value={studentID}
                onChange={(e) => setStudentID(e.target.value)}
              />
            </div>
          )}

          <button className="btn btn-primary btn-md d-flex align-items-center" onClick={handleSearch} disabled={buttonLoading}>
            Find Room
            {buttonLoading && (
              <div className='ms-2'>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
              </div>
            )}
          </button>
        </>
      )}

      {error && <ErrorMessage message={error} />}

      {room && (
        <div className="mt-4 col-4 text-center">
          <h3>Your Allotted Room: <strong>{room}</strong></h3>
          <p>Instructions:</p>
          Upon arriving at the College, you're requested to locate <strong>{room[0]} Block</strong>.
          Proceed to the <strong>{room[1]}{room[1] === '1' ? 'st' : room[1] === '2' ? 'nd' : room[1] === '3' ? 'rd' : 'th'} floor</strong>.
          Find <strong>Room Number {room}</strong> on that floor. <br />
          An Escort Team will be there to help you out in case you are unable to find the room. All the best!
          <br />
          <button className="btn btn-link mt-3" onClick={handleReset}>Search Another</button>
        </div>
      )}
    </div>
  );
};

export default RoomFinder;
