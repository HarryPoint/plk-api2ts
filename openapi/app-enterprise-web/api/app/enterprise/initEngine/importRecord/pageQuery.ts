import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 导入记录相关/pageQueryUsingPOST
*/
export default function fetchMethod(options: { data: IPageBreaks4 }, extraOptions?: any) {
    return http<IJSONResultPageInformationImportRecordDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/importRecord/pageQuery",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 分页_4 */
export interface IPageBreaks4 {
    /** 当前页面 */
    pageNo?: number;
    /** 结束时间-from */
    endTimeFrom?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 应用名称-模糊匹配 */
    applicationNameMatch?: string;
    /** 开始时间-from */
    beginTimeFrom?: number;
    /** 开始时间-end */
    beginTimeEnd?: number;
    /** 操作人-精确匹配 */
    operatorUserId?: string;
    /** 结束时间-end */
    endTimeEnd?: number;
    /** 文件名-模糊匹配 */
    importFileNameMatch?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: EPagingSortVO_isAsc;
}
/** JSONResult«分页信息«ImportRecordDTO»» */
export interface IJSONResultPageInformationImportRecordDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPageInformationImportRecordDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 分页信息«ImportRecordDTO» */
export interface IPageInformationImportRecordDTO {
    /** 当前页码 */
    pageNo?: string;
    /** 分页大小 */
    pageSize?: string;
    /** 总页数 */
    totalPage?: string;
    /** 总的记录数 */
    totalCount?: string;
    /** 分页列表 */
    list?: IImportRecordDTO[];
    /** 最后页页码 */
    lastPage?: string;
    /** 是否有上一页 */
    hasPreviousPage?: EPageInformationImportRecordDTO_hasPreviousPage;
    /** 是否有下一页 */
    hasNextPage?: EPageInformationImportRecordDTO_hasNextPage;
    /** 上一页页码 */
    previousPage?: string;
    /** 下一页页码 */
    nextPage?: string;
}
/** ImportRecordDTO */
export interface IImportRecordDTO {
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 导入记录ID */
    id?: string;
    /** 总数量 */
    totalNumber?: number;
    /** 导入文件名 */
    importFileName?: string;
    /** 成功数量 */
    numberOfSuccess?: number;
    /** 导入文件ID */
    importFileId?: string;
    /** 应用ID */
    applicationId?: string;
    /** 应用编码 */
    applicationCode?: string;
    /** 应用名称 */
    applicationName?: string;
    /** 导入类型 */
    importType?: EImportRecordDTO_importType;
    /** 表数据ID */
    tableDataId?: string;
    /** 开始时间 */
    beginTime?: number;
    /** 结束时间 */
    endTime?: number;
    /** 导入状态 */
    importStatus?: EImportRecordDTO_importStatus;
    /** 失败数量 */
    numberOfFailure?: number;
    /** 操作用户ID */
    operatorUserId?: string;
    /** 操作用户名 */
    operatorUserName?: string;
    /** 可以导入的数量 */
    numberOfImport?: string;
    /** 是否继续导入失败数据 */
    continueImportFailureData?: boolean;
    /** 失败表数据ID */
    failureTableDataId?: string;
    /** 模板ID */
    templateId?: string;
    /** 模板编码 */
    templateCode?: string;
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EPageInformationImportRecordDTO_hasPreviousPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EPageInformationImportRecordDTO_hasNextPage {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EImportRecordDTO_importType {
    /** 首次导入 */
    FIRST_IMPORT = "FIRST_IMPORT",
    /** 失败数据导入 */
    FAILED_DATA_IMPORT = "FAILED_DATA_IMPORT"
}

export enum EImportRecordDTO_importStatus {
    /** 未导入 */
    NONE = "NONE",
    /** 排队中 */
    QUEUING = "QUEUING",
    /** 导入中 */
    IMPORTING = "IMPORTING",
    /** 完成导入 */
    COMPLETE = "COMPLETE"
}
