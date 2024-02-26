import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目计划变更相关/viewAddExtendParamUsingPOST_2
*/
export default function fetchMethod(options: { data: IProjectPlanChangeOrderExtensionParameterRequest }, extraOptions?: any) {
    return http<any>(
        {
            url: "/masterdata-service/projectPlanModification/viewAddExtendParam",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 项目计划变更单扩展参数请求 */
export interface IProjectPlanChangeOrderExtensionParameterRequest {
    /** 项目计划变更信息列表 */
    projectPlanList?: IItemChangeSingleFieldExtensionParameterRequest[];
    /** 项目阶段列表 */
    projectStageList?: IItemChangeFormExtensionParameterEditRequest[];
    /** 项目任务列表 */
    projectTaskList?: IItemChangeFormExtensionParameterEditRequest[];
}
/** 项目变更单字段扩展参数请求 */
export interface IItemChangeSingleFieldExtensionParameterRequest {
    /** 字段编号 */
    fieldCode?: string;
    /** 操作类型 */
    operateType?: ('ADD' | 'MODIFY' | 'DELETE' | 'RECORD');
    /** 旧值 */
    oldValue?: string;
    /** 新值 */
    newValue?: string;
    /** 子表数据列表 */
    childList?: IItemChangeListFieldExtensionParameterRequest1[];
}
/** 项目变更单子表字段扩展参数请求_1 */
export interface IItemChangeListFieldExtensionParameterRequest1 {
    /** 行数据id */
    dataId?: string;
    /** 行操作类型 */
    operateType?: ('ADD' | 'MODIFY' | 'DELETE' | 'RECORD');
    /** 列数据 */
    columnData?: IItemChangeSingleFieldExtensionParameterRequest[];
}
/** 项目变更表单扩展参数编辑请求 */
export interface IItemChangeFormExtensionParameterEditRequest {
    /** 应用id */
    appId?: number;
    /** 表单操作类型 */
    operateType?: ('ADD' | 'MODIFY' | 'DELETE' | 'MODIFY_PROJECT_MANGER');
    /** 数据id */
    dataId?: string;
    /** 字段数据列表 */
    fieldDataList?: IItemChangeSingleFieldExtensionParameterRequest[];
}
