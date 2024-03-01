import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/准备期相关/editUsingPOST_20
*/
export default function fetchMethod(options: { data: IPreparatoryPeriodEditorDTO, params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/readyTime/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 准备期编辑DTO */
export interface IPreparatoryPeriodEditorDTO {
    /** 编号 */
    code?: string;
    /** id */
    id?: string;
    /** 名称 */
    name: string;
    /** 所属工序id */
    processId: string;
    /** 规则类型 */
    ruleType: EPreparatoryPeriodEditorDTO_ruleType;
    /** 耗时 */
    takeTime: number;
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

export enum EPreparatoryPeriodEditorDTO_ruleType {
    /** 产出物料相同 */
    EQUAL = "EQUAL",
    /** 产出物料不相同 */
    NOT_EQUAL = "NOT_EQUAL"
}
