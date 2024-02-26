import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/初始化引擎 - 导入记录相关/getByTableDataIdUsingGET
*/
export default function fetchMethod(params: { tableDataId: number }, extraOptions?: any) {
    return http<IJSONResultImportRecordDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/initEngine/importRecord/getByTableDataId",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«ImportRecordDTO» */
export interface IJSONResultImportRecordDTO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IImportRecordDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** ImportRecordDTO */
export interface IImportRecordDTO {
    /** 创建用户ID */
    createUserId: number;
    /** 创建用户名 */
    createUserName: string;
    /** 创建部门ID */
    createDeptId: number;
    /** 创建部门名称 */
    createDeptName: string;
    /** 更新部门ID */
    updateDeptId: number;
    /** 更新部门名称 */
    updateDeptName: string;
    /** 创建时间 */
    createTime: string;
    /** 更新用户ID */
    updateUserId: number;
    /** 更新用户名称 */
    updateUserName: string;
    /** 更新时间 */
    updateTime: string;
    /** 导入记录ID */
    id: number;
    /** 总数量 */
    totalNumber: number;
    /** 导入文件名 */
    importFileName: string;
    /** 成功数量 */
    numberOfSuccess: number;
    /** 导入文件ID */
    importFileId: number;
    /** 应用ID */
    applicationId: number;
    /** 应用编码 */
    applicationCode: string;
    /** 应用名称 */
    applicationName: string;
    /** 导入类型 */
    importType: string;
    /** 表数据ID */
    tableDataId: string;
    /** 开始时间 */
    beginTime: string;
    /** 结束时间 */
    endTime: string;
    /** 导入状态 */
    importStatus: string;
    /** 失败数量 */
    numberOfFailure: number;
    /** 操作用户ID */
    operatorUserId: number;
    /** 操作用户名 */
    operatorUserName: string;
    /** 可以导入的数量 */
    numberOfImport: number;
    /** 是否继续导入失败数据 */
    continueImportFailureData: boolean;
    /** 失败表数据ID */
    failureTableDataId: number;
    /** 模板ID */
    templateId: number;
    /** 模板编码 */
    templateCode: string;
}
