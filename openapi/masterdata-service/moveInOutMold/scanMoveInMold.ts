import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/进出料模具相关/scanMoveInMoldUsingPOST
*/
export default function fetchMethod(options: { data: IFeedMoldScanRequestDTO }, extraOptions?: any) {
    return http<IJSONResultFeedMoldRespondsToDTO>(
        {
            url: "/masterdata-service/moveInOutMold/scanMoveInMold",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 进料模具扫描请求DTO */
export interface IFeedMoldScanRequestDTO {
    /** 编号 */
    code: string;
    /** 生产任务id */
    produceTaskId: string;
}
/** JSONResult«进料模具响应DTO» */
export interface IJSONResultFeedMoldRespondsToDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheFeedMoldRespondsToDTO1;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 进料模具响应DTO_1 */
export interface ITheFeedMoldRespondsToDTO1 {
    /** 模具编号 */
    code?: string;
    /** 模具id */
    id?: string;
    /** 模具名称 */
    name?: string;
    /** 生产工艺模具id */
    produceTechnologyMoldId?: string[];
}
