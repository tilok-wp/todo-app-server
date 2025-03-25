
const mobileNumber = '01533062390'
const passwordweb = '01533062390'
const webfile_one = 'BGDRV04E9625'
const full__name_One = 'MD ABDUL MATIN'
const email_name = 'ERFANHOSEN19945@GMAIL.COM'
const webfile_two = 'BGDCV04EA425'
const full__name_two = 'MINU BEGUM'
const webfile_three = ''
const full__name_Three = ''
const webfile_four = ''
const full__name_Four = ''
const webfile_five = ''
const full__name_Five = ''
const fimalyCount = '0'
const highComMisstion = '2'   // Dhaka 1 || Chittagong 2  || Khulna  5  | Sylet 4
const visaCenter = 'IVACRAJSHAHI' //
const ivac_id = '2'   // Dhaka JFP 17  || Khulna 3 || CHITTAGONG 5  || SYLHET 4
const visa_type = '2'   //MEDICAL/MEDICAL ATTENDANT VISA 13 || ENTRY VISA 6  || turist 3
const visit_Purpose = 'Emergency need to treatment.I am very sick.'



const desiredDate = '2025-03-26';




let $scope = angular.element(document.querySelector('[ng-controller="payment_application"]')).scope();
let $injector = angular.element(document.querySelector('[ng-app="indian_visa"]')).injector();
let $http = $injector.get('$http');
let $timeout = $injector.get('$timeout');




let config = {
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
    }
};

const dataSubmitPost = function (postUrl, postData) {
    $http.post(basepath + postUrl, postData, config)
}


const notifyAmountChange = function () {
    let notifyAmountChangeData = $.param({
        'api_key': visaCenter,
        '_token': csrf_token ?? $('#applicationForm input[name="_token"]').val(),
    });
    dataSubmitPost('/notify_amount_change', notifyAmountChangeData)

}



const mobileVeryfyNumber = function () {
    mobileVerifydata = $.param({
        '_token': csrf_token ?? $('#applicationForm input[name="_token"]').val(),
        'mobile_no': mobileNumber
    });

    dataSubmitPost('/mobile-verify', mobileVerifydata)

}


const passwordVerify = function () {
    let passwordVerifydata = $.param({
        '_token': csrf_token ?? $('#applicationForm input[name="_token"]').val(),
        'password': passwordweb
    });

    dataSubmitPost('/login-auth-submit', passwordVerifydata)

}


const loginOtpSubmit = function (otpValue) {
    let loginOtpValue = document.getElementById('loginOtpInput').value
    let loginOtpSubmitdata = $.param({
        '_token': csrf_token ?? $('#applicationForm input[name="_token"]').val(),
        'otp': loginOtpValue
    });
    if (loginOtpValue) {

        dataSubmitPost('/login-otp-submit', loginOtpSubmitdata)
    }
}


const appInfoSubmit = function () {
    let appInfoSubmitdata = $.param({
        '_token': csrf_token ?? $('#applicationForm input[name="_token"]').val(),
        'highcom': highComMisstion,
        'webfile_id': webfile_one,
        'webfile_id_repeat': webfile_one,
        'ivac_id': ivac_id,
        'visa_type': visa_type,
        'family_count': fimalyCount,
        'visit_purpose': visit_Purpose
    });

    dataSubmitPost('/application-info-submit', appInfoSubmitdata)
}


const personalInfoSubmit = function () {
    let personalInfoSubmitdata
    if (fimalyCount == 0) {
        personalInfoSubmitdata = $.param({
            '_token': csrf_token ?? $('#applicationForm input[name="_token"]').val(),
            'full__name': full__name_One,
            'email_name': email_name,
            'pho_ne': mobileNumber,
            'web_file_id': webfile_one
        });
    }
    if (fimalyCount == 1) {
        personalInfoSubmitdata = $.param({
            '_token': csrf_token ?? $('#applicationForm input[name="_token"]').val(),
            'full__name': full__name_One,
            'email_name': email_name,
            'pho_ne': mobileNumber,
            'web_file_id': webfile_one,
            'family[1][name]': full__name_two,
            'family[1][webfile_no]': webfile_two,
            'family[1][again_webfile_no]': webfile_two
        });
    }
    if (fimalyCount == 2) {
        personalInfoSubmitdata = $.param({
            '_token': csrf_token ?? $('#applicationForm input[name="_token"]').val(),
            'full__name': full__name_One,
            'email_name': email_name,
            'pho_ne': mobileNumber,
            'web_file_id': webfile_one,
            'family[1][name]': full__name_two,
            'family[1][webfile_no]': webfile_two,
            'family[1][again_webfile_no]': webfile_two,
            'family[2][name]': full__name_Three,
            'family[2][webfile_no]': webfile_three,
            'family[2][again_webfile_no]': webfile_three
        });
    }
    if (fimalyCount == 3) {
        personalInfoSubmitdata = $.param({
            '_token': csrf_token ?? $('#applicationForm input[name="_token"]').val(),
            'full__name': full__name_One,
            'email_name': email_name,
            'pho_ne': mobileNumber,
            'web_file_id': webfile_one,
            'family[1][name]': full__name_two,
            'family[1][webfile_no]': webfile_two,
            'family[1][again_webfile_no]': webfile_two,
            'family[2][name]': full__name_Three,
            'family[2][webfile_no]': webfile_three,
            'family[2][again_webfile_no]': webfile_three,
            'family[3][name]': full__name_Four,
            'family[3][webfile_no]': webfile_four,
            'family[3][again_webfile_no]': webfile_four
        });
    }
    if (fimalyCount == 4) {
        personalInfoSubmitdata = $.param({
            '_token': csrf_token ?? $('#applicationForm input[name="_token"]').val(),
            'full__name': full__name_One,
            'email_name': email_name,
            'pho_ne': mobileNumber,
            'web_file_id': webfile_one,
            'family[1][name]': full__name_two,
            'family[1][webfile_no]': webfile_two,
            'family[1][again_webfile_no]': webfile_two,
            'family[2][name]': full__name_Three,
            'family[2][webfile_no]': webfile_three,
            'family[2][again_webfile_no]': webfile_three,
            'family[3][name]': full__name_Four,
            'family[3][webfile_no]': webfile_four,
            'family[3][again_webfile_no]': webfile_four,
            'family[4][name]': full__name_Five,
            'family[4][webfile_no]': webfile_five,
            'family[4][again_webfile_no]': webfile_five
        });
    }

    dataSubmitPost('/personal-info-submit', personalInfoSubmitdata)
}


const overviewSubmit = function () {
    var overviewSubmitdata = $.param({
        '_token': csrf_token ?? $('input[name="_token"]').val()
    });

    dataSubmitPost('/overview-submit', overviewSubmitdata)
}
const payOtpSent = function () {
    var payOtpSentdata = $.param({
        '_token': csrf_token ?? $('input[name="_token"]').val(),
        'resend': '0'
    });

    dataSubmitPost('/pay-otp-sent', payOtpSentdata)
}

const payOtpVerify = function (otpValue) {
    let payOtpValue = document.getElementById('payOtpInput').value

    var payOtpVerifydata = $.param({
        '_token': csrf_token ?? $('input[name="_token"]').val(),
        'otp': payOtpValue
    });
    if (payOtpValue) {
        dataSubmitPost('/pay-otp-verify', payOtpVerifydata)
    }

}

const dateAppionmentSubmit = function () {


    $.ajax({
        url: 'https://payment.ivacbd.com/pay-slot-time',
        method: 'POST',
        data: {
            _token: csrf_token ?? $('input[name="_token"]').val(),
            // CSRF token
            appointment_date: desiredDate,
        },
        success: function (response) {
            if (response.success) {
                const slotTimes = response.data.slot_times;
                let options = '<option value="">Select an Appointment Time</option>';

                // Populate appointment_time dropdown
                slotTimes.forEach(function (slot) {
                    options += `<option value="${slot.hour}">${slot.time_display}</option>`;
                });

                $('#appointment_time').html(options);
                $('#captcha-content').html(response.captcha);

                // Ensure ReCAPTCHA script is reloaded
                setTimeout(function () {
                    if (typeof grecaptcha !== "undefined") {
                        grecaptcha.render('hash-param');
                        // Render dynamically added CAPTCHA
                    } else {

                    }
                }, 500);
            } else {

            }
        },
        error: function () {

            if (xhr.status === 419) {
                // TokenMismatchException

            } else {

            }
        },
    });


}




const dateAppionment = function () {


    const dateDropdown = document.querySelector('select[name="appointment_date"]');
    if (dateDropdown) {
        dateDropdown.innerHTML = '<option value="">Select an Appointment Date</option><option value="' + desiredDate + '" selected>' + desiredDate + '</option>';
        dateDropdown.value = desiredDate;
        const event = new Event('change', { bubbles: true });
        dateDropdown.dispatchEvent(event);
        const captchaWrapper = document.getElementById('captcha-wrapper')
        if (captchaWrapper) {
            captchaWrapper.classList.remove('d-none')
        }
        let paymentSelect = document.querySelectorAll('.payment_list .payment-option')
        if (paymentSelect) {
            paymentSelect[1].click()
        }
        console.log('Date set to:', desiredDate);
    } else {
        console.error('Date dropdown not found!');
    }
}
const timeAppionment = function () {
    const desiredTime = '10:00 - 10:59';
    const timeDropdown = document.querySelector('select[name="appointment_time"]');
    if (timeDropdown) {
        timeDropdown.innerHTML = '<option value="">Select an Appointment Time</option><option value="10">' + desiredTime + '</option>';
        timeDropdown.value = desiredDate;
        const event = new Event('change', { bubbles: true });
        timeDropdown.dispatchEvent(event);
        console.log('Date set to:', desiredDate);
    } else {
        console.error('Date dropdown not found!');
    }
}



const payAppionment = function () {
    let captchaTokenValue = document.getElementById('captchaToken').value


    if (captchaTokenValue) {
        $.ajax({
            url: 'https://payment.ivacbd.com/paynow',
            method: 'POST',
            data: {
                '_token': csrf_token ?? $('input[name="_token"]').val(),
                // CSRF token
                'appointment_date': desiredDate,
                'appointment_time': '10',
                'hash_param': captchaTokenValue,
                'selected_payment[name]': 'MASTER',
                'selected_payment[slug]': 'mastercard',
                'selected_payment[link]': 'https://securepay.sslcommerz.com/gwprocess/v4/image/gw1/master.png'
            },

            success: function (response) {
                if (response.success) {
                    window.open(response.url, '_blank')
                    console.log(response.url)
                    //window.location.href = response.url;
                } else {

                }
            },
            error: function (xhr, status, error) {
                if (xhr.status === 419) {
                    // TokenMismatchException

                } else {

                }
            }
        });
    }


}



const buttonSlot = document.createElement('div')
buttonSlot.innerHTML = `<div class="row"><div class="col-md-12"><div class="form-group"><label for="appointment_date" class="text-uppercase ng-binding">Appointment Date</label><select class="form-control" id="appointment_date" name="appointment_date"><option value="">Select an Appointment Date</option></select></div><div class="form-group"><label for="appointment_time" class="text-uppercase ng-binding">Appointment Time</label><select class="form-control" id="appointment_time" name="appointment_time"><option value="">Select an Appointment Time</option></select></div></div></div><div class="row justify-content-center" id="captcha-wrapper"><div class="col-md-12 text-center" id="captcha-content"></div></div><div class="row"><div class="col-md-12 text-center" style="margin-top:25px"><button type="button" class="btn btn-default ng-binding" id="payNowButton" disabled="true">Pay Now</button><p class="text-danger ng-binding">Please complete your transaction within 5 minutes to get the appointment date successfully</p></div></div>`



const captchaReLoad = function recaptchaReload() {
    const reloadButton = document.createElement("div");
    reloadButton.innerHTML = `<button onclick="reCaptcha1()">Cap Re</button><button onclick="mobileVeryfyNumber()">Mobile</button><button onclick="passwordVerify()">Pass</button><input placeholder="write LoinOTP" id="loginOtpInput" maxlength="6"><button onclick="loginOtpSubmit()">LoOtp</button> <button onclick="notifyAmountChange()">Change</button><button onclick="appInfoSubmit()">AppInfo</button><button onclick="personalInfoSubmit()">PerInfo</button><button onclick="overviewSubmit()">Overview</button><button onclick="payOtpSent()">OTPSent</button><input placeholder="write PayOTP" id="payOtpInput" maxlength="6"><button onclick="payOtpVerify()">VeryFyOtp</button><button onclick="dateAppionmentSubmit()">Date Submit</button><button onclick="dateAppionment()">Date</button><button onclick="timeAppionment()">Time</button><button onclick="payAppionment()">Pay</button><input placeholder="token" id="captchaToken" minlength="6">`;
    reloadButton.style.cssText = `
          position: fixed;
          top: 38px;
          left: 10px;
          padding: 4px;
          z-index: 1000;
      `;

    const formInputhtml = document.querySelector('.tab-content')
    document.body.appendChild(reloadButton);
    formInputhtml.appendChild(buttonSlot);
    const reCaptcha1 = function () {
        const iframes = document.querySelectorAll("#hash-param > div > div > iframe");
        if (iframes.length > 0) {
            iframes[0].src = iframes[0].src;
        } else {
            console.log("No matching iframe found");
        }
    };

    const reCaptcha2 = function () {
        const iframes = document.querySelectorAll("#hash-param > div > div > iframe");
        if (iframes.length > 1) {
            iframes[1].src = iframes[1].src;
        } else {
            console.log("No second iframe found");
        }
    };

}
captchaReLoad()

