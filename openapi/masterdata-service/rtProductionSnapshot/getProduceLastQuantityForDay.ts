import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产快照相关/getProduceLastQuantityForDayUsingGET
*/
export default function fetchMethod(options: { params: { BeginTime?: number; EndTime?: number; EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListReturnTheFinalProcessQualifiedOutputToVO>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getProduceLastQuantityForDay",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«最后工序合格产出返回VO»» */
export interface IJSONResultListReturnTheFinalProcessQualifiedOutputToVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IFinalProcessQualifiedOutputIsReturnedToVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 最后工序合格产出返回VO */
export interface IFinalProcessQualifiedOutputIsReturnedToVO {
    /** 数据时间（时间戳），根据当前选中的时间粒度去转换时间 */
    dataTime?: number;
    /** 最后工序合格产出数 */
    lastProduceQuantity?: number;
}
