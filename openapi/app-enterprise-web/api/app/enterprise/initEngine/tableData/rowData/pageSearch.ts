import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 表数据相关/pageSearchRowDataUsingPOST
*/
export default function fetchMethod(options: { data: ISearchForRowData1 }, extraOptions?: any) {
    return http<IJSONResultPageInformationRowDataOutputDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/rowData/pageSearch",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 搜索行数据_1 */
export interface ISearchForRowData1 {
    /** 表数据ID */
    tableDataId?: number;
    /** 字段查询条件 */
    fieldQueryCondition?: Record<string, string>;
    /** 当前页面 */
    pageNo?: number;
    /** 错误数据 */
    existsErrorData?: ESearchForRowData1_existsErrorData;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 校验状态 */
    verificationStatus?: ESearchForRowData1_verificationStatus;
    /** 操作模式 */
    operationMode?: ESearchForRowData1_operationMode;
    /** 生效状态 */
    importStatus?: ESearchForRowData1_importStatus;
    /** 存在重复的数据 */
    existsRepeatData?: ESearchForRowData1_existsRepeatData;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«RowDataOutputDTO»» */
export interface IJSONResultPageInformationRowDataOutputDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationRowDataOutputDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«RowDataOutputDTO» */
export interface IPageInformationRowDataOutputDTO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IRowDataOutputDTO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationRowDataOutputDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationRowDataOutputDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** RowDataOutputDTO */
export interface IRowDataOutputDTO {
    /** ID */
    id?: number;
    /** 表格数据ID */
    tableDataId?: number;
    /** 行下标 */
    rowIndex?: number;
    /** 导入状态 */
    importStatus?: ERowDataOutputDTO_importStatus;
    /** 操作方式 */
    operationMode?: ERowDataOutputDTO_operationMode;
    /** 是否存在业务数据 */
    existsBusinessData?: boolean;
    /** 错误消息 */
    failMessage?: string;
    /** 是否启用 */
    enabled?: boolean;
    /** 重复数据ID列表 */
    repeatDataIdList?: string[];
    /** 单元格数据 */
    cellDataList?: ICellData1[];
    /** 校验状态 */
    verificationStatus?: ERowDataOutputDTO_verificationStatus;
}
/** 单元格数据_1 */
export interface ICellData1 {
    /** ID */
    id?: number;
    /** 表格数据ID */
    tableDataId?: number;
    /** 行数据ID */
    rowDataId?: number;
    /** 单元格下标 */
    cellIndex?: number;
    /** 关联字段信息 */
    fieldDefine?: IAssociatedFieldDefinition;
    /** 值 */
    value?: string;
    /** 原始数据 */
    originalData?: string;
    /** 是否校正数据 */
    correctionValue?: ECellData1_correctionValue;
    /** 预警信息 */
    alarmLogList?: IAlarmLogOutputDTO[];
    /** 关联表单选项列表 */
    selectedItemList?: IAssociationFormSelectedItemOutputDTO[];
}
/** 关联字段定义 */
export interface IAssociatedFieldDefinition {
    /** undefined */
    code: string;
}
/** AlarmLogOutputDTO */
export interface IAlarmLogOutputDTO {
    /** undefined */
    alarmMessage?: string;
    /** undefined */
    alarmLevel?: EAlarmLogOutputDTO_alarmLevel;
}
/** AssociationFormSelectedItemOutputDTO */
export interface IAssociationFormSelectedItemOutputDTO {
    /** undefined */
    id?: number;
    /** undefined */
    showFieldValue?: string;
}

export enum ESearchForRowData1_existsErrorData {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ESearchForRowData1_verificationStatus {
    /** 未校验 */
    NOT = "NOT",
    /** 未通过校验 */
    FAILED_VERIFICATION = "FAILED_VERIFICATION",
    /** 已通过校验 */
    VERIFICATION_PASSED = "VERIFICATION_PASSED"
}

export enum ESearchForRowData1_operationMode {
    /** 覆盖导入 */
    OVERRIDE_IMPORT = "OVERRIDE_IMPORT",
    /** 取消导入 */
    CANCEL_IMPORT = "CANCEL_IMPORT"
}

export enum ESearchForRowData1_importStatus {
    /** 未导入 */
    NOT_IMPORTED = "NOT_IMPORTED",
    /** 已导入 */
    IMPORTED = "IMPORTED",
    /** 导入失败 */
    IMPORT_FAIL = "IMPORT_FAIL"
}

export enum ESearchForRowData1_existsRepeatData {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationRowDataOutputDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationRowDataOutputDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ERowDataOutputDTO_importStatus {
    /** 未导入 */
    NOT_IMPORTED = "NOT_IMPORTED",
    /** 已导入 */
    IMPORTED = "IMPORTED",
    /** 导入失败 */
    IMPORT_FAIL = "IMPORT_FAIL"
}

export enum ERowDataOutputDTO_operationMode {
    /** 覆盖导入 */
    OVERRIDE_IMPORT = "OVERRIDE_IMPORT",
    /** 取消导入 */
    CANCEL_IMPORT = "CANCEL_IMPORT"
}

export enum ERowDataOutputDTO_verificationStatus {
    /** 未校验 */
    NOT = "NOT",
    /** 未通过校验 */
    FAILED_VERIFICATION = "FAILED_VERIFICATION",
    /** 已通过校验 */
    VERIFICATION_PASSED = "VERIFICATION_PASSED"
}

export enum ECellData1_correctionValue {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EAlarmLogOutputDTO_alarmLevel {
    ERROR = "ERROR",
    WARNING = "WARNING"
}
