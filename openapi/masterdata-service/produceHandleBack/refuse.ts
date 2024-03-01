import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/生产处理返工相关/refuseUsingPOST
*/
export default function fetchMethod(options: { data: IProductionHandlesReworkRejectRequestObjects }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/produceHandleBack/refuse",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产处理返工拒绝请求对象 */
export interface IProductionHandlesReworkRejectRequestObjects {
    /** 处理意见 */
    handleRemark?: string;
    /** 生产处理id */
    id?: string;
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
