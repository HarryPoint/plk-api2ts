import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产报废服务相关/approvalUsingPOST
*/
export default function fetchMethod(options: { data: IProductionProcessingScrapChangeStatusDTO, params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/produceHandleScrap/approval",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产处理报废变更状态DTO */
export interface IProductionProcessingScrapChangeStatusDTO {
    /** 处理意见 */
    handleRemark?: string;
    /** 生产处理id */
    id: string;
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
