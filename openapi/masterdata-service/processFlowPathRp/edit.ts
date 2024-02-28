import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/工序字段对应表相关/editUsingPOST_8
*/
export default function fetchMethod(options: { data: IProcedureFieldsCorrespondToTableEditDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
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
    /** id */
    id?: string;
    /** 编号 */
    code?: string;
    /** 工序id */
    processId: string;
    /** 关联表单id */
    flowPathId: string;
    /** 关联字段序列号列表 */
    fieldSerialNoList: string[];
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
