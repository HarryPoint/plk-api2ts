import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/项目变更相关/viewAddExtendParamUsingPOST_1
export default function fetchMethod(data: IItemChangeOrderExtensionParameterRequest, extraOptions?: any) {
    return http<any>(
        {
            url: "/masterdata-service/projectModification/viewAddExtendParam",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 项目变更单扩展参数请求
export interface IItemChangeOrderExtensionParameterRequest {
    // 字段数据列表
    fieldDataList: IItemChangeSingleFieldExtensionParameterRequest[];
}
// 项目变更单字段扩展参数请求
export interface IItemChangeSingleFieldExtensionParameterRequest {
    // 字段编号
    fieldCode: string;
    // 操作类型
    operateType: string;
    // 旧值
    oldValue: string;
    // 新值
    newValue: string;
    // 子表数据列表
    childList: IItemChangeListFieldExtensionParameterRequest1[];
}
// 项目变更单子表字段扩展参数请求_1
export interface IItemChangeListFieldExtensionParameterRequest1 {
    // 行数据id
    dataId: string;
    // 行操作类型
    operateType: string;
    // 列数据
    columnData: IItemChangeSingleFieldExtensionParameterRequest[];
}
