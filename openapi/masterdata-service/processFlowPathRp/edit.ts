import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/工序字段对应表相关/editUsingPOST_8
*/
export default function fetchMethod(options: { data: IProcedureFieldsCorrespondToTableEditDTO }, extraOptions?: any) {
    return http<IJSONResultObject>(
        {
            url: "/masterdata-service/processFlowPathRp/edit",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 工序字段对应表编辑DTO */
export interface IProcedureFieldsCorrespondToTableEditDTO {
    /** 编号 */
    code?: string;
    /** 关联字段序列号列表 */
    fieldSerialNoList: string[];
    /** 关联表单id */
    flowPathId: string;
    /** id */
    id?: string;
    /** 工序id */
    processId: string;
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
