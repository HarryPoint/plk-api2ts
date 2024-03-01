import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产快照相关/getFpyRateReportResultVOForAllUsingGET
*/
export default function fetchMethod(options: { params: { BeginTime?: number; EndTime?: number; EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultPassthroughReportReturnsVO>(
        {
            url: "/masterdata-service/rtProductionSnapshot/getFpyRateReportResultVOForAll",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«直通报表返回VO» */
export interface IJSONResultPassthroughReportReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IThePassThroughReportReturnsVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 直通报表返回VO */
export interface IThePassThroughReportReturnsVO {
    /** 最后工序合格产出 */
    completeProduceQuantity?: number;
    /** 数据时间（时间戳），根据当前选中的时间粒度去转换时间 */
    dataTime?: number;
    /** 直通率 */
    fpyRatio?: number;
    /** 直通率-大屏展示 */
    fpyRatioScale2?: number;
    /** 所有工序报废 */
    scrapQuantity?: number;
}
