import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/Saas授权相关/changeTelephoneByPasswordUsingPOST
*/
export default function fetchMethod(data: IUpdateMobileNumberBasedOnPasswordRequestDTO, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/saasAuth/changeTelephoneByPassword",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 根据密码更新手机号码请求 DTO */
export interface IUpdateMobileNumberBasedOnPasswordRequestDTO {
    /** 密码 */
    password?: string;
    /** 新手机号码 */
    newTelephone: string;
    /** 新手机验证码 */
    newVerCode: string;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
