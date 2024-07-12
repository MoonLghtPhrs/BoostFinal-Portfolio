import React from "react";

const Resume = () => {
    return (
        <div>
 <div class="container py-4 px-3 mx-auto">
      <h1>Work History</h1>
      <p> Click here to download an ATS friendly pdf version of the resume.</p>
      <button class="btn btn-info"> Resume pdf</button>
    
      <div>    space</div>
        <h2>Work Expirence</h2>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Operations Support Specialist - Indeed June 2021 - Feb 2024
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            <p>Led the initiative to review and roll out new product functionality to 500 of our highest visibility clients. 
              Project resulted in rollout of new functionality to 1,234 clients, doubling the initial goal.
              The process required creating eligibility criteria for these top client
              Created monetization opportunities  for clients that did not meet criteria to increase spend
              Oversaw the entire project management life cycle of the job matching initiative.
              Initial goal of 9% coverage was met in phase 1 allowing for additional expansion phases leading to a total of 22% job coverage by end of phase 2. 
              Defined overall scope and managed execution as well as oversaw two additional expansion phases
              Developing instructions / guidelines for our external vendor team of 10 to execute. Rolling out training and audit schedule  to the vendor team
              Collaborated peers to develop Standard Operating Procedures and decision guiding flowcharts for the vendor team and internal training purposes.
              Direct project management experience with large-scale operations team, resulting in a 20% reduction to the team's turnaround time
              Developed project timeline and milestone tracking to fit within Agile workflows
              Defined requirements and subsequently executed salesforce case research into prolonged turnaround time
              Collaborated with external product team and CRM team to create a specialized Salesforce Case Record and subtypes. 
              Created the business case to submit to leadership by defining technical requirements. Working closely with stakeholders to meet business needs
              Expanded knowledge around structure and permissions within Salesforce environment 
              Implemented an Office Hours Program, working to provide ad-hoc support and policy clarification for Client Support & Sales throughout 2022 and 2023. 
               Led more than 60 sessions in that time. 
              I leveraged internal connections to bolster documentation on common pain points 
              Expanded program to accommodate EMEA teams and Global Product Commercialization teams. 
              Campaigned for increased internal coverage of Office Hours to support the initiative 
              </p>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Colosseum Athletics - Social Media Intern Nov 2019 – April 2020
            </button>
          

          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.

              Increased conversion rates on email marketing newsletter by 0.5% by improving formatting, calls to action     and interesting email subjects in MailChimp
              Consistently managed multiple social media accounts A schedules (Facebook, Instagram) by maintaining      strict time management
              Created  unique marketing materials that served to establish a brand voice
              Successfully promoted merchandise sales by utilizing professional relationships with brand ambassadors and Instagram influencers.
              Constructed in-house photo shoots to create engaging polished content for websites and social media.

              
            
              
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Conduent – Data Entry Specialist					May 2019 – Nov 2019
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
            <div class="accordion-body">
              Reduced project workload by entering large amounts of data ahead of schedule, reducing pressure on team members and focusing on high priority projects.
              Maintained highly organized file systems allowing for easy access to important evidence and client notice. 
              <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div> 
      {/* <!-- End work expirence --> */}

      <h2>Education</h2>
     <div> Education
      California State University, Long Beach				2013 - 2020
      Hongik University 						2017
      UCLA Extension						2023
      </div>

      <h2>Skills</h2>
      <div>
        Skills:
Data Analytics Jira, Salesforce, Project Management, Agile, Confluence, Tableau, Google Sheets, Excel, Google Suite, Microsoft Office suite, Wordpress, Customer Service, Cross-Team Collaboration, Email Campaign

      </div>

      <h2> Want to know more? Contact me!</h2>
      <button class="btn btn-info"> Resume pdf</button> <button class="btn btn-info"> Contact me!</button>
    </div>
        </div>
    )
}
export default Resume;