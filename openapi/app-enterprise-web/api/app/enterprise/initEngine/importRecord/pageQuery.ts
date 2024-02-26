import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 导入记录相关/pageQueryUsingPOST
*/
export default function fetchMethod(data: IPageBreaks4, extraOptions?: any) {
    return http<IJSONResultPageInformationImportRecordDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/importRecord/pageQuery",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 分页_4 */
export interface IPageBreaks4 {
    /** 当前页面 */
    pageNo?: number;
    /** 结束时间-from */
    endTimeFrom?: string;
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 应用名称-模糊匹配 */
    applicationNameMatch?: string;
    /** 开始时间-from */
    beginTimeFrom?: string;
    /** 开始时间-end */
    beginTimeEnd?: string;
    /** 操作人-精确匹配 */
    operatorUserId?: number;
    /** 结束时间-end */
    endTimeEnd?: string;
    /** 文件名-模糊匹配 */
    importFileNameMatch?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: string;
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
    ts?: number;
}
/** 分页信息«ImportRecordDTO» */
export interface IPageInformationImportRecordDTO {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IImportRecordDTO[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: string;
    /** 是否有下一页 */
    hasNextPage?: string;
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** ImportRecordDTO */
export interface IImportRecordDTO {
    /** 创建用户ID */
    createUserId?: number;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: number;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: number;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新用户ID */
    updateUserId?: number;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: string;
    /** 导入记录ID */
    id?: number;
    /** 总数量 */
    totalNumber?: number;
    /** 导入文件名 */
    importFileName?: string;
    /** 成功数量 */
    numberOfSuccess?: number;
    /** 导入文件ID */
    importFileId?: number;
    /** 应用ID */
    applicationId?: number;
    /** 应用编码 */
    applicationCode?: string;
    /** 应用名称 */
    applicationName?: string;
    /** 导入类型 */
    importType?: string;
    /** 表数据ID */
    tableDataId?: string;
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 导入状态 */
    importStatus?: string;
    /** 失败数量 */
    numberOfFailure?: number;
    /** 操作用户ID */
    operatorUserId?: number;
    /** 操作用户名 */
    operatorUserName?: string;
    /** 可以导入的数量 */
    numberOfImport?: number;
    /** 是否继续导入失败数据 */
    continueImportFailureData?: boolean;
    /** 失败表数据ID */
    failureTableDataId?: number;
    /** 模板ID */
    templateId?: number;
    /** 模板编码 */
    templateCode?: string;
}
