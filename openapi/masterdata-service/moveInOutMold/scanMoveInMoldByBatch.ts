import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/进出料模具相关/scanMoveInMoldByBatchUsingPOST
*/
export default function fetchMethod(options: { data: IFeedMoldQueryDTO }, extraOptions?: any) {
    return http<IJSONResultListFeedMoldResponseDTO>(
        {
            url: "/masterdata-service/moveInOutMold/scanMoveInMoldByBatch",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 进料模具查询DTO */
export interface IFeedMoldQueryDTO {
    /** 名称或者编号 */
    nameOrCode?: string;
    /** 生产任务ids */
    produceTaskIds?: string[];
}
/** JSONResult«List«进料模具响应DTO»» */
export interface IJSONResultListFeedMoldResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IFeedMoldRespondsToDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 进料模具响应DTO */
export interface IFeedMoldRespondsToDTO {
    /** 模具编号 */
    code?: string;
    /** 模具id */
    id?: string;
    /** 模具名称 */
    name?: string;
    /** 生产工艺模具id */
    produceTechnologyMoldId?: string[];
}
