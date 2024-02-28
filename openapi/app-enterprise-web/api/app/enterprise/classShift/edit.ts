import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/班次相关/editUsingPOST_3
*/
export default function fetchMethod(options: { data: IShiftEditorDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/classShift/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 班次编辑DTO */
export interface IShiftEditorDTO {
    /** id */
    id?: string;
    /** 班次名称 */
    name: string;
    /** 班次编号 */
    code?: string;
    /** 开始时间 HH:mm */
    beginTime: string;
    /** 班次结束时间类型 */
    endTimeType?: EShiftEditorDTO_endTimeType;
    /** 结束时间 HH:mm */
    endTime: string;
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
    ts?: string;
}

export enum EShiftEditorDTO_endTimeType {
    /** 当日 */
    TODAY = "TODAY",
    /** 次日 */
    NEXT = "NEXT"
}
