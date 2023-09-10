import React from 'react'

const Privacy = () => {
    return (
        <div className='w-auto  m-16 h-full bg-slate-200'>
            <h1 className='text-4xl m-8 p-4 font-bold italic decoration-dashed border-b-2 border-gray-200'>Privacy Policy</h1>
            <div className='m-8 '>
                <h2 className='text-3xl italic m-4 font-bold'>Comments</h2>
                <p className='text-2xl italic m-2 mx-6 '> 
                    When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
                </p>
                <p className='text-2xl italic m-2 mx-6 '>
                    An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
                </p>
            </div>
            <div className='m-8 '>
                <h2 className='text-3xl italic m-4 font-bold'>Media</h2>
                <p className='text-2xl italic m-2 mx-6 '>
                    If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included.
                    Visitors to the website can download and extract any location data from images on the website.
                </p>
            </div>
            <div className='m-8 '>
                <h2 className='text-3xl italic m-4 font-bold'>Cookies</h2>
                <p className='text-2xl italic m-2 mx-6 '>
                    If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies.
                    These are for your convenience so that you do not have to fill in your details again when you leave another comment.
                    These cookies will last for one year.
                </p>
                <p className='text-2xl italic m-2 mx-6 '>
                    If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies.
                    This cookie contains no personal data and is discarded when you close your browser.
                </p>
                <p className='text-2xl italic m-2 mx-6 '>
                    When you log in, we will also set up several cookies to save your login information and your screen display choices.
                    Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
                </p>
                <p className='text-2xl italic m-2 mx-6 '>
                    If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal
                    data and simply indicates the post ID of the article you just edited. It expires after 1 day.
                </p>
            </div>
        </div>
    )
}

export default Privacy