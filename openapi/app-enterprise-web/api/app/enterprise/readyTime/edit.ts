import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16400/doc.html#/default/准备期相关/editUsingPOST_24
*/
export default function fetchMethod(options: { data: IPreparatoryPeriodEditorDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/readyTime/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 准备期编辑DTO */
export interface IPreparatoryPeriodEditorDTO {
    /** id */
    id?: string;
    /** 所属工序id */
    processId: string;
    /** 名称 */
    name: string;
    /** 编号 */
    code?: string;
    /** 规则类型 */
    ruleType: EPreparatoryPeriodEditorDTO_ruleType;
    /** 耗时 */
    takeTime: number;
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

export enum EPreparatoryPeriodEditorDTO_ruleType {
    /** 产出物料相同 */
    EQUAL = "EQUAL",
    /** 产出物料不相同 */
    NOT_EQUAL = "NOT_EQUAL"
}
