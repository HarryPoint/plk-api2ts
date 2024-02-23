import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 表数据相关/pageSearchRowDataUsingPOST
export default function fetchMethod(data: ISearchForRowData1) {
    return post<IJSONResultPageInformationRowDataOutputDTO['data']>({
      url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/rowData/pageSearch",
      data,
    });
}
// 搜索行数据_1
export interface ISearchForRowData1 {
    // 表数据ID
    tableDataId: number;
    // 字段查询条件
    fieldQueryCondition: Record<string, string>;
    // 当前页面
    pageNo: number;
    // 错误数据
    existsErrorData: string;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 校验状态
    verificationStatus: string;
    // 操作模式
    operationMode: string;
    // 生效状态
    importStatus: string;
    // 存在重复的数据
    existsRepeatData: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«RowDataOutputDTO»»
export interface IJSONResultPageInformationRowDataOutputDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IPageInformationRowDataOutputDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«RowDataOutputDTO»
export interface IPageInformationRowDataOutputDTO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: IRowDataOutputDTO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// RowDataOutputDTO
export interface IRowDataOutputDTO {
    // ID
    id: number;
    // 表格数据ID
    tableDataId: number;
    // 行下标
    rowIndex: number;
    // 导入状态
    importStatus: string;
    // 操作方式
    operationMode: string;
    // 是否存在业务数据
    existsBusinessData: boolean;
    // 错误消息
    failMessage: string;
    // 是否启用
    enabled: boolean;
    // 重复数据ID列表
    repeatDataIdList: string[];
    // 单元格数据
    cellDataList: ICellData1[];
    // 校验状态
    verificationStatus: string;
}
// 单元格数据_1
export interface ICellData1 {
    // ID
    id: number;
    // 表格数据ID
    tableDataId: number;
    // 行数据ID
    rowDataId: number;
    // 单元格下标
    cellIndex: number;
    // 关联字段信息
    fieldDefine: IAssociatedFieldDefinition;
    // 值
    value: string;
    // 原始数据
    originalData: string;
    // 是否校正数据
    correctionValue: string;
    // 预警信息
    alarmLogList: IAlarmLogOutputDTO[];
    // 关联表单选项列表
    selectedItemList: IAssociationFormSelectedItemOutputDTO[];
}
// 关联字段定义
export interface IAssociatedFieldDefinition {
    // undefined
    code: string;
}
// AlarmLogOutputDTO
export interface IAlarmLogOutputDTO {
    // undefined
    alarmMessage: string;
    // undefined
    alarmLevel: string;
}
// AssociationFormSelectedItemOutputDTO
export interface IAssociationFormSelectedItemOutputDTO {
    // undefined
    id: number;
    // undefined
    showFieldValue: string;
}
