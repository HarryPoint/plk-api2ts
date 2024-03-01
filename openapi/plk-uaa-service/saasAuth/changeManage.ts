import { http } from "@/api/http";

/**
* @author TangYongDi
* @link http://47.108.135.148:18100/doc.html#/default/Saas授权相关/changeManageUsingPOST
*/
export default function fetchMethod(options: { data: ITransferSuperAdministratorDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/plk-uaa-service/saasAuth/changeManage",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 转让超级管理员 DTO */
export interface ITransferSuperAdministratorDTO {
    /** 转让用户id */
    changeUserId: string;
    /** 验证码 */
    verCode?: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
