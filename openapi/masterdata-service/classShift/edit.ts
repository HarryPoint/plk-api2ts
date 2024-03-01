import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/班次相关/editUsingPOST_1
*/
export default function fetchMethod(options: { data: IShiftEditorDTO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/classShift/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 班次编辑DTO */
export interface IShiftEditorDTO {
    /** 开始时间 HH:mm */
    beginTime: string;
    /** 班次编号 */
    code?: string;
    /** 结束时间 HH:mm */
    endTime: string;
    /** 班次结束时间类型 */
    endTimeType?: EShiftEditorDTO_endTimeType;
    /** id */
    id?: string;
    /** 班次名称 */
    name: string;
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

export enum EShiftEditorDTO_endTimeType {
    /** 当日 */
    TODAY = "TODAY",
    /** 次日 */
    NEXT = "NEXT"
}
