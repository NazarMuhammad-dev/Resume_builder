const form=document.getElementById("Resume_form")
form.addEventListener("submit",(event)=>{
  event.preventDefault()  // not for submission
  console.log("clicked");

  //   first get reference with values
   const Name=document.getElementById("name").value;
   const Address=document.getElementById("address").value;
   const Contact=document.getElementById("contact").value;
   const Email=document.getElementById("email").value;
   const CareerP=document.getElementById("career_objective").value;
   const ExperienceP=document.getElementById("experience").value;
   const SkillP=document.getElementById("skills").value;
   const EducationP=document.getElementById("education").value;
   
 // set in loacal storage
 localStorage.setItem("Name",Name);
 localStorage.setItem("Address",Address);
 localStorage.setItem("Contact",Contact);
 localStorage.setItem("Email",Email);
 localStorage.setItem("CareerP",CareerP);
 localStorage.setItem("ExperienceP",ExperienceP);
 localStorage.setItem("SkillP",SkillP)
 localStorage.setItem("EducationP",EducationP)

  document.getElementById("input_div").style.display='none';
  document.getElementById("output_div").style.display='block';


  displayOutput();
    
  
    


})

function displayOutput() {
    const firstName=localStorage.getItem('Name');
    const firstAddress=localStorage.getItem('Address');
    const firstContact=localStorage.getItem('Contact');
    const firstEmail=localStorage.getItem('Email');
    const firstCareerP=localStorage.getItem('CareerP');
    const firstExperience=localStorage.getItem('ExperienceP');
    const firstSkills=localStorage.getItem('SkillP');
    const firstEducation=localStorage.getItem('EducationP');

    document.getElementById('display_name').textContent=firstName?firstName:'No input provide'
    document.getElementById('display_address').textContent=firstAddress?firstAddress:'No input provide'
    document.getElementById('display_contact').textContent=firstContact?firstContact:'No input provide'
    document.getElementById('display_email').textContent=firstEmail?firstEmail:'No input provide'
    document.getElementById('display_careerP').textContent=firstCareerP?firstCareerP:'No input provide'
    document.getElementById('display_experienceP').textContent=firstExperience?firstExperience:'No input provide'
    document.getElementById('display_skills').textContent=firstSkills?firstSkills:'No input provide'
    document.getElementById('display_educationP').textContent=firstEducation?firstEducation:'No input provide'
}


//for edit resume
const edit=document.getElementById("edit_btn")
edit.addEventListener("click",()=>{
    console.log("clicked");  // for conform clicked
    
    document.getElementById("output_div").style.display='none';
    document.getElementById("input_div").style.display='block';
})



// for download Resume 
const download=document.getElementById("download_btn");
download.addEventListener("click",()=>{
    console.log("clicked");  // for conform clicked
    
    window.print()




    
   

})




























