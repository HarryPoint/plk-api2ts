import { http } from "@/api/http";

/**
* @author XieJian
* @link http://47.108.135.148:16700/doc.html#/default/进出料模具相关/listMoveInMoldByProduceTaskIdUsingGET
*/
export default function fetchMethod(options: { params: { ProduceTaskId?: string } }, extraOptions?: any) {
    return http<IJSONResultListFeedMoldResponseDTO1>(
        {
            url: "/masterdata-service/moveInOutMold/listMoveInMoldByProduceTaskId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«进料模具响应DTO»»_1 */
export interface IJSONResultListFeedMoldResponseDTO1 {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheFeedMoldRespondsToDTO1[];
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
