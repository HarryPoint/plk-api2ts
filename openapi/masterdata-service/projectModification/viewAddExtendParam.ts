import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/项目变更相关/viewAddExtendParamUsingPOST_1
*/
export default function fetchMethod(options: { data: IItemChangeOrderExtensionParameterRequest }, extraOptions?: any) {
    return http<any>(
        {
            url: "/masterdata-service/projectModification/viewAddExtendParam",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 项目变更单扩展参数请求 */
export interface IItemChangeOrderExtensionParameterRequest {
    /** 字段数据列表 */
    fieldDataList?: IItemChangeSingleFieldExtensionParameterRequest[];
}
/** 项目变更单字段扩展参数请求 */
export interface IItemChangeSingleFieldExtensionParameterRequest {
    /** 字段编号 */
    fieldCode?: string;
    /** 操作类型 */
    operateType?: EItemChangeSingleFieldExtensionParameterRequest_operateType;
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
    operateType?: EItemChangeListFieldExtensionParameterRequest1_operateType;
    /** 列数据 */
    columnData?: IItemChangeSingleFieldExtensionParameterRequest[];
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
