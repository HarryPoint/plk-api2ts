import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 表数据相关/editBatchVerticalCellUsingPOST
export default function fetchMethod(data: ICellBatchEditRequest, extraOptions?: any) {
    return http<IJSONResultstring>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/rowData/editBatchCellValue",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 单元格批量编辑请求
export interface ICellBatchEditRequest {
    // 表格数据ID
    rowDataIdList: number[];
    // 字段定义编码
    fieldDefineCode: string;
    // 表数据ID
    tableDataId: number;
    // 输入值
    value: string;
    // 关联表单选项列表
    selectedItemList: IAssociationFormSelectedItemInputputDTO[];
}
// AssociationFormSelectedItemInputputDTO
export interface IAssociationFormSelectedItemInputputDTO {
    // undefined
    id: number;
    // undefined
    showFieldValue: string;
}
// JSONResult«string»
export interface IJSONResultstring {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
