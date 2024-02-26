import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/质检任务相关/getProcessSelectorUsingGET_3
*/
export default function fetchMethod(options: {}, extraOptions?: any) {
    return http<ITheJSONResultListOperationSelectsToReturnVO>(
        {
            url: "/app-mobile-web/api/app/mobile/qualityTask/getProcessSelector",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«工序选择返回VO»» */
export interface ITheJSONResultListOperationSelectsToReturnVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcedureSelectionReturnsVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 工序选择返回VO */
export interface IProcedureSelectionReturnsVO {
    /** id */
    id?: number;
    /** 工序名称 */
    name?: string;
    /** 工序编号 */
    code?: string;
    /** 区域id */
    areaId?: string;
    /** 区域名称 */
    areaName?: string;
}
