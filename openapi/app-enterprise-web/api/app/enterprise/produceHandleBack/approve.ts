import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16400/doc.html#/default/生产处理返工相关/approveUsingPOST
*/
export default function fetchMethod(options: { data: IProductionProcessesTheReworkApprovalRequestObject }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceHandleBack/approve",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产处理返工批准请求对象 */
export interface IProductionProcessesTheReworkApprovalRequestObject {
    /** 生产处理id */
    id?: string;
    /** 处理意见 */
    handleRemark?: string;
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
    ts?: string;
}
