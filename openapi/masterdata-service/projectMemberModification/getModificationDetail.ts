import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目成员变更相关/getModificationDetailUsingGET
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultListProjectMemberChangeOrderResponseParameters>(
        {
            url: "/masterdata-service/projectMemberModification/getModificationDetail",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«项目成员变更单响应参数»» */
export interface IJSONResultListProjectMemberChangeOrderResponseParameters {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IItemMemberChangeOrderResponseParameter[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目成员变更单响应参数 */
export interface IItemMemberChangeOrderResponseParameter {
    /** 成员编号 */
    code?: string;
    /** 成员姓名 */
    employeeName?: string;
    /** 表单操作类型 */
    operateType?: EItemMemberChangeOrderResponseParameter_operateType;
    /** 数据id */
    dataId?: string;
    /** 项目变更表单id */
    projectModificationFormId?: string;
    /** 字段数据列表 */
    fieldDataList?: IItemChangeOrderFieldResponseParameter[];
}
/** 项目变更单字段响应参数 */
export interface IItemChangeOrderFieldResponseParameter {
    /** 字段编号 */
    fieldCode?: string;
    /** 操作类型 */
    operateType?: EItemChangeOrderFieldResponseParameter_operateType;
    /** 旧值 */
    oldValue?: string;
    /** 新值 */
    newValue?: string;
    /** 子表数据列表 */
    childList?: IItemChangeListFieldExtensionParameterRequest[];
}
/** 项目变更单子表字段扩展参数请求 */
export interface IItemChangeListFieldExtensionParameterRequest {
    /** 行数据id */
    dataId?: string;
    /** 操作类型 */
    operateType?: EItemChangeListFieldExtensionParameterRequest_operateType;
    /** 列数据 */
    columnData?: IItemChangeOrderFieldResponseParameter[];
}

export enum EItemMemberChangeOrderResponseParameter_operateType {
    /** 新增 */
    ADD = "ADD",
    /** 修改 */
    MODIFY = "MODIFY",
    /** 删除 */
    DELETE = "DELETE",
    /** 修改项目经理 */
    MODIFY_PROJECT_MANGER = "MODIFY_PROJECT_MANGER"
}

export enum EItemChangeOrderFieldResponseParameter_operateType {
    /** 新增 */
    ADD = "ADD",
    /** 修改 */
    MODIFY = "MODIFY",
    /** 删除 */
    DELETE = "DELETE",
    /** 记录值 */
    RECORD = "RECORD"
}

export enum EItemChangeListFieldExtensionParameterRequest_operateType {
    /** 新增 */
    ADD = "ADD",
    /** 修改 */
    MODIFY = "MODIFY",
    /** 删除 */
    DELETE = "DELETE",
    /** 记录值 */
    RECORD = "RECORD"
}
