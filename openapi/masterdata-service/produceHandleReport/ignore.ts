import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/上报反馈服务相关/ignoreUsingPOST
*/
export default function fetchMethod(options: { data: IReportTheDTOToHandleTheChangeStatus, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/masterdata-service/produceHandleReport/ignore",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 上报反馈处理变更状态DTO */
export interface IReportTheDTOToHandleTheChangeStatus {
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
