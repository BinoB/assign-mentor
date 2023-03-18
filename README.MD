Test each of the API endpoints using Postman

1.POST /mentor endpoint:

 * Set the request URL to http://localhost:5000/mentor.
 * Set the request method to POST.
 * Select the form-data option in  the Body tab.
 * Add a key name and value with the mentor's name.
 * Click on the Send button to create a new mentor.


2.POST /student endpoint:

 * Set the request URL to http://localhost:5000/student.
 * Set the request method to POST.
 * Select the form-data option in the Body tab.
 * Add a key name and value with the student's name.
 * Click on the Send button to create a new student.

3.To assign a student to a mentor, send a POST request to http://localhost:5000/api/mentors/:mentorId/students/:studentId, replacing :mentorId and :studentId with the appropriate IDs.

4.To change a student's mentor, send a PUT request to http://localhost:5000/api/students/:studentId/mentor/:mentorId, replacing :studentId and :mentorId with the appropriate IDs.

5.To retrieve all students assigned to a mentor, send a GET request to http://localhost:5000/api/mentors/:mentorId/students, replacing :mentorId with the appropriate ID. 

6.To retrieve a student's assigned mentor, send a GET request to http://localhost:5000/api/students/:studentId/mentor, replacing :studentId with the appropriate ID.