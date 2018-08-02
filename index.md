---
layout: default
---
<div class="row">
    <div class="col-lg-10 col-lg-offset-2">
        <div class="well well-sm contact-form">
            
            <form class="form-horizontal" name="contact" netlify-honeypot="dob" action="thank-you" netlify>
                <fieldset>                                

                    <div class="form-group">                                    
                        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1">
                            <label for="your_name">Your Name : </label>
                            <input type="text" name="your_name" id="your_name" class="form-control validate[required]" placeholder="Your Name" required />
                        </div>
                    </div>

                    <div class="form-group">                                    
                        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1">
                            <label for="email">Your Email Address : </label>
                            <input type="text" name="email" id="email" class="form-control validate[required, custom[email]]" placeholder="Email Address" required />                        
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1">
                            <label for="comment">Your Message : </label>
                            <textarea name="comment" rows="6" cols="29" id="comment" class="form-control" placeholder="Enter your message." required></textarea>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="col-sm-8 col-sm-offset-2 col-md-8 col-md-offset-1">
                            <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                        </div>
                    </div>
                    <div class="date_of_birth_container"><input type="text" name="dob" /></div>

                </fieldset>
            </form>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md-12 text-center">
        <a href="http://www.behance.net/colinbunner" class="social-icon social-icon-behance" title="Colin Bunner on Behance"><i class="fab fa-behance fa-2x"></i></a>
        <a href="https://instagram.com/colinbunnerart/" class="social-icon social-icon-instagram" title="Colin Bunner on Instagram"><i class="fab fa-instagram fa-2x"></i></a>
        <a href="https://twitter.com/colinbunner" class="social-icon social-icon-twitter" title="Colin Bunner on Twitter"><i class="fab fa-twitter fa-2x"></i></a>
    </div>
</div>