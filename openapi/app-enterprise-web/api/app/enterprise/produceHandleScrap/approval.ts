import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16400/doc.html#/default/生产报废服务相关/approvalUsingPOST
*/
export default function fetchMethod(options: { data: IProductionProcessingScrapChangeStatusDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceHandleScrap/approval",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 生产处理报废变更状态DTO */
export interface IProductionProcessingScrapChangeStatusDTO {
    /** 生产处理id */
    id: string;
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
