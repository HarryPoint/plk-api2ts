import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目成员变更相关/viewAddExtendParamUsingPOST
*/
export default function fetchMethod(options: { data: IProjectMemberChangeOrderExtensionParameterRequest }, extraOptions?: any) {
    return http<any>(
        {
            url: "/masterdata-service/projectMemberModification/viewAddExtendParam",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 项目成员变更单扩展参数请求 */
export interface IProjectMemberChangeOrderExtensionParameterRequest {
    /** 表单数据列表 */
    fromDataList?: IItemChangeFormExtensionParameterEditRequest[];
}
/** 项目变更表单扩展参数编辑请求 */
export interface IItemChangeFormExtensionParameterEditRequest {
    /** 应用id */
    appId?: string;
    /** 数据id */
    dataId?: string;
    /** 字段数据列表 */
    fieldDataList?: IItemChangeSingleFieldExtensionParameterRequest[];
    /** 表单操作类型 */
    operateType?: EItemChangeFormExtensionParameterEditRequest_operateType;
}
/** 项目变更单字段扩展参数请求 */
export interface IItemChangeSingleFieldExtensionParameterRequest {
    /** 子表数据列表 */
    childList?: IItemChangeListFieldExtensionParameterRequest1[];
    /** 字段编号 */
    fieldCode?: string;
    /** 新值 */
    newValue?: string;
    /** 旧值 */
    oldValue?: string;
    /** 操作类型 */
    operateType?: EItemChangeSingleFieldExtensionParameterRequest_operateType;
}
/** 项目变更单子表字段扩展参数请求_1 */
export interface IItemChangeListFieldExtensionParameterRequest1 {
    /** 列数据 */
    columnData?: IItemChangeSingleFieldExtensionParameterRequest[];
    /** 行数据id */
    dataId?: string;
    /** 行操作类型 */
    operateType?: EItemChangeListFieldExtensionParameterRequest1_operateType;
}

export enum EItemChangeFormExtensionParameterEditRequest_operateType {
    /** 新增 */
    ADD = "ADD",
    /** 修改 */
    MODIFY = "MODIFY",
    /** 删除 */
    DELETE = "DELETE",
    /** 修改项目经理 */
    MODIFY_PROJECT_MANGER = "MODIFY_PROJECT_MANGER"
}

export enum EItemChangeSingleFieldExtensionParameterRequest_operateType {
    /** 新增 */
    ADD = "ADD",
    /** 修改 */
    MODIFY = "MODIFY",
    /** 删除 */
    DELETE = "DELETE",
    /** 记录值 */
    RECORD = "RECORD"
}

export enum EItemChangeListFieldExtensionParameterRequest1_operateType {
    /** 新增 */
    ADD = "ADD",
    /** 修改 */
    MODIFY = "MODIFY",
    /** 删除 */
    DELETE = "DELETE",
    /** 记录值 */
    RECORD = "RECORD"
}
