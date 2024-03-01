import { http } from "@/api/http";

/**
* @author MaoHaiPing
* @link http://47.108.135.148:16700/doc.html#/default/项目计划变更相关/getModificationDetailUsingGET_2
*/
export default function fetchMethod(options: { params: { id?: string } }, extraOptions?: any) {
    return http<IJSONResultProjectPlanChangeResponseObject>(
        {
            url: "/masterdata-service/projectPlanModification/getModificationDetail",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«项目计划变更响应对象» */
export interface IJSONResultProjectPlanChangeResponseObject {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: ITheProjectPlanChangesTheResponseObject;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 项目计划变更响应对象 */
export interface ITheProjectPlanChangesTheResponseObject {
    /** 项目计划变更信息响应列表 */
    projectPlanList?: IItemChangeOrderFieldResponseParameter[];
    /** 项目阶段响应列表 */
    projectStageList?: IChangeOrderResponseParametersInProjectPhase[];
    /** 项目任务响应列表 */
    projectTaskList?: IProjectTaskChangeOrderResponseParameters[];
}
/** 项目变更单字段响应参数 */
export interface IItemChangeOrderFieldResponseParameter {
    /** 子表数据列表 */
    childList?: IItemChangeListFieldExtensionParameterRequest[];
    /** 字段编号 */
    fieldCode?: string;
    /** 新值 */
    newValue?: string;
    /** 旧值 */
    oldValue?: string;
    /** 操作类型 */
    operateType?: EItemChangeOrderFieldResponseParameter_operateType;
}
/** 项目变更单子表字段扩展参数请求 */
export interface IItemChangeListFieldExtensionParameterRequest {
    /** 列数据 */
    columnData?: IItemChangeOrderFieldResponseParameter[];
    /** 行数据id */
    dataId?: string;
    /** 操作类型 */
    operateType?: EItemChangeListFieldExtensionParameterRequest_operateType;
}
/** 项目阶段变更单响应参数 */
export interface IChangeOrderResponseParametersInProjectPhase {
    /** 数据id */
    dataId?: string;
    /** 字段数据列表 */
    fieldDataList?: IItemChangeOrderFieldResponseParameter[];
    /** 名称 */
    name?: string;
    /** 表单操作类型 */
    operateType?: EChangeOrderResponseParametersInProjectPhase_operateType;
    /** 项目变更表单id */
    projectModificationFormId?: string;
}
/** 项目任务变更单响应参数 */
export interface IProjectTaskChangeOrderResponseParameters {
    /** 应用id */
    appId?: string;
    /** 编号 */
    code?: string;
    /** 数据id */
    dataId?: string;
    /** 字段数据列表 */
    fieldDataList?: IItemChangeOrderFieldResponseParameter[];
    /** 名称 */
    name?: string;
    /** 表单操作类型 */
    operateType?: EProjectTaskChangeOrderResponseParameters_operateType;
    /** 项目变更表单id */
    projectModificationFormId?: string;
    /** 项目阶段名称 */
    projectStageName?: string;
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

export enum EChangeOrderResponseParametersInProjectPhase_operateType {
    /** 新增 */
    ADD = "ADD",
    /** 修改 */
    MODIFY = "MODIFY",
    /** 删除 */
    DELETE = "DELETE",
    /** 修改项目经理 */
    MODIFY_PROJECT_MANGER = "MODIFY_PROJECT_MANGER"
}

export enum EProjectTaskChangeOrderResponseParameters_operateType {
    /** 新增 */
    ADD = "ADD",
    /** 修改 */
    MODIFY = "MODIFY",
    /** 删除 */
    DELETE = "DELETE",
    /** 修改项目经理 */
    MODIFY_PROJECT_MANGER = "MODIFY_PROJECT_MANGER"
}
