import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/甘特图相关/addOccupyUsingPOST
*/
export default function fetchMethod(options: { data: ITheOccupiedDTOWasAdded }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/autoPlanGantt/addOccupy",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 添加占用DTO */
export interface ITheOccupiedDTOWasAdded {
    /** 占用开始时间 */
    beginTime?: number;
    /** 占用结束时间 */
    endTime?: number;
    /** 循环次数 */
    loopCount?: number;
    /** 占用类型 */
    occupyType?: ETheOccupiedDTOWasAdded_occupyType;
    /** 占用工序id */
    processId?: string;
    /** 占用原因 */
    reason?: string;
}
/** JSONResult«object» */
export interface IJSONResultObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}

export enum ETheOccupiedDTOWasAdded_occupyType {
    /** 时间占用 */
    TIME = "TIME",
    /** 工序占用 */
    PROCESS = "PROCESS"
}
