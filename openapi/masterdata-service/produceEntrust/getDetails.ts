import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/委外加工管理/getDetailsUsingGET
*/
export default function fetchMethod(options: { params: { Id?: string; EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListOutsourcedProcessingDetailsAreReturnedToVO>(
        {
            url: "/masterdata-service/produceEntrust/getDetails",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«委外加工明细返回VO»» */
export interface IJSONResultListOutsourcedProcessingDetailsAreReturnedToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IOutsourcedProcessingDetailsReturnedToVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 委外加工明细返回VO */
export interface IOutsourcedProcessingDetailsReturnedToVO {
    /** 返回投料数量 */
    backQuantity?: number;
    /** 创建时间 */
    createTime?: number;
    /** 创建人 */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** id */
    id?: string;
    /** 报废数量 */
    scrapQuantity?: number;
}
