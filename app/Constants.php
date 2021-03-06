<?php

namespace App;

class Constants
{
    const BASE_URL = "http://yazdjob.test/";

    // zarinpal normal urls
    const  ZARINPAL_PURCHASE_URL = "https://www.zarinpal.com/pg/services/WebGate/wsdl";
    const  ZARINPAL_PAYMENT_URL = "https://www.zarinpal.com/pg/StartPay/";
    // web payment callback
    const  ZARINPAL_CALLBACK_URL = Constants::BASE_URL . "payment/verify/";
    // app payment callback
    const  ZARINPAL_APP_CALLBACK_URL = Constants::BASE_URL . "api/payment/verify/";


    #string keys
    const KEY_PHONE = "phone";
    const KEY_REMEMBER_TOKEN = "remember_token";
    const KEY_PASSWORD = "password";
    const KEY_EXPIRED_AT_PASSWORD = "expired_at_password";
    const KEY_EMERGENCY = "emergency";
    const KEY_EXTENDED = "extended";
    const KEY_LADDER = "ladder";
    const KEY_MONTHLY = "monthly";
    const KEY_WEEKLY = "weekly";
    const KEY_MONTHLY_KARJOO = "monthlyKarjoo";
    const KEY_WEEKLY_KARJOO = "weeklyKarjoo";
    const KEY_FEE_TYPE = "fee_type";
    const KEY_FEE_VALUE = "fee_value";
    const KEY_FEE = "fee";
    const KEY_PAY_TYPE = "pay_type";
    const KEY_TRANSACTION_ID = "transactionId";
    const KEY_POST = "post";
    const KEY_POST_LIFE = "postLife";
    const KEY_IS_EMERGENCY = "isEmergency";
    const KEY_IS_LADDER = "isLadder";
    const KEY_IS_EXTENDED = "isExtended";
    const KEY_REFERENCE_ID = "referenceId";
    const KEY_AMOUNT = "amount";


    #persion strings
    const KEY_TEXT_MESSAGE = "کد تایید یزد جاب: ";
    const KEY_KARFARMA = "کارفرما";
    const STR_PAY_DESCRIPTION = "هزینه انتشار آگهی در یزد جاب";


    #sms keys
    const API_URL = "https://RestfulSms.com/";
    const TEMPLATE_ID_VERIFY_CODE = "20146";
    const TEMPLATE_ID_VERIFY_POST = "20147";
    const TEMPLATE_ID_VERIFY_POST2 = "20187";
    const PARAMETER_VERIFY_CODE = "VerificationCode";
    const PARAMETER_VERIFY_POST = "Title";
    const PARAMETER_VERIFY_POST2 = "Phone";
}