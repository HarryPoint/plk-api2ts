import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/员工相关/listUsingGET_2
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListEmployeeBaseResponseDTO>(
        {
            url: "/masterdata-service/employee/list",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«员工基础响应 DTO»» */
export interface IJSONResultListEmployeeBaseResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IEmployeeBaseRespondsToDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 员工基础响应 DTO */
export interface IEmployeeBaseRespondsToDTO {
    /** id */
    id?: number;
    /** 员工工号 */
    code?: string;
    /** 员工姓名 */
    name?: string;
    /** 手机号码 */
    mobilePhone?: string;
    /** 入职日期 */
    entryTime?: string;
    /** 离职日期 */
    dimissionTime?: string;
    /** 出生日期 */
    birthday?: string;
    /** 性别 */
    gender?: EEmployeeBaseRespondsToDTO_gender;
    /** 学历 */
    educational?: EEmployeeBaseRespondsToDTO_educational;
    /** 籍贯 */
    nativePlace?: string;
    /** 任职部门id */
    departmentId?: number;
    /** 邮箱 */
    email?: string;
}

export enum EEmployeeBaseRespondsToDTO_gender {
    /** 男 */
    MAN = "MAN",
    /** 女 */
    WOMAN = "WOMAN"
}

export enum EEmployeeBaseRespondsToDTO_educational {
    /** 小学 */
    PRIMARY = "PRIMARY",
    /** 初中 */
    JUNIOR = "JUNIOR",
    /** 高中 */
    HIGH = "HIGH",
    /** 大专 */
    COLLEGE = "COLLEGE",
    /** 本科 */
    UNDERGRADUATE = "UNDERGRADUATE",
    /** 研究生 */
    POSTGRADUATE = "POSTGRADUATE",
    /** 中技 */
    INTERMEDIATE_TECHNICAL = "INTERMEDIATE_TECHNICAL",
    /** 硕士 */
    MASTER = "MASTER",
    /** 中专 */
    TECHNICAL_SECONDARY = "TECHNICAL_SECONDARY"
}
