import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/生产处理暂扣相关/scrapUsingPOST
*/
export default function fetchMethod(options: { data: IProductionProcessesWithholdScrapRequestObjects }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceHandleHoldPause/scrap",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 生产处理暂扣报废请求对象 */
export interface IProductionProcessesWithholdScrapRequestObjects {
    /** 生产处理id */
    id?: number;
    /** 返工类型id */
    produceAbnormalCategoryId: number;
    /** 报废数量 */
    abnormalQuantity: number;
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
    ts?: number;
}
