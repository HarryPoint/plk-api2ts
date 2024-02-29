import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 表数据相关/pageQueryRepeatTableDataUsingPOST
*/
export default function fetchMethod(options: { data: IPaging15 }, extraOptions?: any) {
    return http<IJSONResultPageInformationTableRowDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/tableData/pageQueryRepeatTableData",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** 分页_15 */
export interface IPaging15 {
    /** 表数据ID */
    tableDataId?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«TableRowDTO»» */
export interface IJSONResultPageInformationTableRowDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationTableRowDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«TableRowDTO» */
export interface IPageInformationTableRowDTO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: ITableRowDTO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationTableRowDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationTableRowDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** TableRowDTO */
export interface ITableRowDTO {
    /** 主表 - 单元格数据 */
    cellList?: ITableCellDTO[];
    /** 主表 - 单元格数据 */
    detailRowList?: ITableRowDTO[];
    /** 行ID列表 */
    rowIdList?: string[];
    /** 操作模式 */
    operatorMode?: ETableRowDTO_operatorMode;
}
/** TableCellDTO */
export interface ITableCellDTO {
    /** 单元格ID */
    id?: string;
    /** 列下标 */
    columnIndex?: number;
    /** 单元格编码 */
    code?: string;
    /** 单元格值 */
    value?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationTableRowDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationTableRowDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETableRowDTO_operatorMode {
    /** 覆盖导入 */
    OVERRIDE_IMPORT = "OVERRIDE_IMPORT",
    /** 取消导入 */
    CANCEL_IMPORT = "CANCEL_IMPORT"
}
