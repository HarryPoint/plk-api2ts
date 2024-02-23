import { http } from '@/api/http';

// http://47.108.139.107:18100/doc.html#/default/Saas授权相关/changeTelephoneByVerCodeUsingPOST
export default function fetchMethod(data: IUpdateMobileNumberAccordingToVerificationCodeRequestDTO, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/plk-uaa-service/saasAuth/changeTelephoneByVerCode",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 根据验证码更新手机号码请求 DTO
export interface IUpdateMobileNumberAccordingToVerificationCodeRequestDTO {
    // 原手机验证码
    oldVerCode: string;
    // 新手机号码
    newTelephone: string;
    // 新手机验证码
    newVerCode: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
