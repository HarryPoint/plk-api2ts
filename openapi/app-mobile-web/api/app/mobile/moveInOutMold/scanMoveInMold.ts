import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/进出料模具相关/scanMoveInMoldUsingPOST
*/
export default function fetchMethod(options: { data: IFeedMoldScanRequestDTO }, extraOptions?: any) {
    return http<IJSONResultFeedMoldRespondsToDTO>(
        {
            url: "/app-mobile-web/api/app/mobile/moveInOutMold/scanMoveInMold",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 进料模具扫描请求DTO */
export interface IFeedMoldScanRequestDTO {
    /** 生产任务id */
    produceTaskId: number;
    /** 编号 */
    code: string;
}
/** JSONResult«进料模具响应DTO» */
export interface IJSONResultFeedMoldRespondsToDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFeedMoldRespondsToDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 进料模具响应DTO */
export interface IFeedMoldRespondsToDTO {
    /** 模具id */
    id?: number;
    /** 模具名称 */
    name?: string;
    /** 模具编号 */
    code?: string;
    /** 生产工艺模具id */
    produceTechnologyMoldId?: number[];
}
