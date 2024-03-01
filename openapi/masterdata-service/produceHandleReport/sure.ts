import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/上报反馈服务相关/sureUsingPOST
*/
export default function fetchMethod(options: { data: IReportTheDTOToHandleTheChangeStatus, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/produceHandleReport/sure",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 上报反馈处理变更状态DTO */
export interface IReportTheDTOToHandleTheChangeStatus {
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
