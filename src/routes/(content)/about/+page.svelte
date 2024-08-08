<script lang="ts">
   import Stack from '$lib/components/stack.svelte'
   import TerminalText from '$lib/components/terminal-text.svelte'
   import Profile from '$lib/images/profile.jpg'
</script>

<section class="page-content">
   <h1>About</h1>
   <Stack flexDirection="row">
      <TerminalText title="David Thompson">
         <p>My name is David!</p>
         <p>
            I'm a software developer and photographer. I'm in the process of
            getting my Bachelor's degree in Computer Science from Brigham Young
            University.
         </p>
         <p>
            I've been programming in JavaScript, HTML, and CSS since 2017, and
            my professional experience began in 2021 working as a student
            developer.
         </p>
         <h3>Job Experience</h3>
         <blockquote>
            <h4>Web Developer</h4>
            <p>
               BYU College of Life Sciences<br />
               Sept. 2023 - Present
            </p>
            <ul>
               <li>
                  Actively participated in the development, maintenance, and
                  testing of websites for the BYU College of Life Sciences using
                  Next.js, React, and C# (.NET).
               </li>
               <li>
                  Assisted in creating responsive web designs to ensure a
                  seamless user experience.
               </li>
            </ul>
         </blockquote>

         <blockquote>
            <h4>Software Engineer Intern</h4>
            <p>
               FamilySearch International<br />
               May 2023 - Aug. 2023
            </p>
            <ul>
               <li>
                  Designed and implemented automated provisioners in Java and
                  CloudFormation for AWS services, including Lambda,
                  EventBridge, and CodeBuild, streamlining resource provisioning
                  and enhancing development efficiency.
               </li>
               <li>
                  Collaborated with various teams in the organization to provide
                  custom AWS automation tools, enabling them to accelerate
                  project development and improve resource utilization
               </li>
               <li>
                  Maintained high-quality code by writing comprehensive unit
                  tests and created detailed design documents and user
                  documentation for the provisioners, facilitating seamless
                  adoption by other teams and ensuring long-term maintainability
               </li>
            </ul>
         </blockquote>
         <blockquote>
            <h4>Web Specialist</h4>
            <p>
               BYU Ballard Center for Social Impact<br />
               Dec. 2021 - May 2023
            </p>
            <ul>
               <li>
                  Led a team in a redesign of ballardbrief.byu.edu, which led to
                  a 4000-user increase in monthly users over a 9-month period
               </li>
               <li>
                  Executed a sitemap/content reorganization, reducing the number
                  of pages on <a href="https://ballardcenter.byu.edu"
                     >ballardcenter.byu.edu</a
                  > from 61 pages to 16 pages
               </li>
               <li>
                  Performed maintenance on and delivered regular Google
                  Analytics reports for 7 websites
               </li>
            </ul>
         </blockquote>
      </TerminalText>
      <img src={Profile} alt="David Thompson" />
   </Stack>
</section>

<style>
   .page-content {
      font-size: 1.2rem;
   }

   blockquote {
      margin: 1rem;
      padding: 1rem;
      border-left: 2px solid #333;
   }
   h3 {
      color: #0c9c2c;
   }
   li {
      margin: 0.5rem;
   }
   a {
      color: var(--color-theme-1);
   }

   h4 {
      margin: 0;
      font-weight: 800;
      color: var(--color-theme-1);
   }
</style>
